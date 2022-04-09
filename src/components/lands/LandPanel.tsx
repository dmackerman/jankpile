import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../definitions/Card';
import Color from '../../definitions/Color';
import { SINGULAR_LAND_NAMES, PLURAL_LAND_NAMES } from '../../lib/consts';
import getPipCounts from '../../lib/utils/getPipCounts';
import { selectColors } from '../../redux-modules/identity';
import { selectBasicLandCounts, selectLandArtByColor, selectNonBasicLands, selectNonBasicOptions, selectNonBasicStatus, setBasicCount, toggleNonBasic, selectLandArtOptions, setBasicArt } from '../../redux-modules/lands';
import { selectIsLands } from '../../redux-modules/steps';
import { selectAllCards } from '../../redux-modules/store';
import CardOption from '../common/CardOption';
import DeleteItem from '../common/DeleteItem';
import Heading from '../common/Heading';
import LoadingWrapper from '../common/LoadingWrapper';
import PanelHeading from '../PanelHeading';
import BasicLandForm from './BasicLandForm';
import LandArtModal from './LandArtModal';
import MINUS_SVG from '../../assets/images/minus.svg';
import PLUS_SVG from '../../assets/images/plus.svg';

const LandPanel: React.FC = () => {
    const dispatch = useDispatch();
    const colors = useSelector(selectColors);
    const basicLandCounts = useSelector(selectBasicLandCounts);
    const deck = useSelector(selectAllCards);
    const nonBasics = useSelector(selectNonBasicLands);
    const nonBasicOptions = useSelector(selectNonBasicOptions);
    const isPanelOpen = useSelector(selectIsLands);
    const landStatus = useSelector(selectNonBasicStatus);
    const landArtOptions = useSelector(selectLandArtOptions);
    const landArtByColor = useSelector(selectLandArtByColor);

    const [selectedColor, setSelectedColor] = useState<Color | null>(null);
    const [landFocusId, setLandFocusId] = useState<string | null>();

    const onToggleOption = useCallback(
        (option: Card) => {
            dispatch(toggleNonBasic(option));
        },
        [dispatch],
    );

    const onInputChange = useCallback(
        (color: Color, count: number) => {
            dispatch(setBasicCount({ color, count }));
        },
        [dispatch]
    );

    const onArtModalClose = useCallback(
        () => {
            setSelectedColor(null);
        },
        []
    );

    const onArtSelect = useCallback(
        (art: Card) => {
            if (selectedColor == null) {
                return;
            }
            dispatch(setBasicArt({ color: selectedColor, art }));
            setSelectedColor(null);
        },
        [dispatch, selectedColor],
    );

    const onAddBasicLand = useCallback(
        (color: Color) => {
            dispatch(setBasicCount({ color, count: basicLandCounts[color] + 1 }));
        },
        [basicLandCounts, dispatch],
    );

    const onSubtractBasicLand = useCallback(
        (color: Color) => {
            if (basicLandCounts[color] === 0) {
                return;
            }
            dispatch(setBasicCount({ color, count: basicLandCounts[color] - 1 }));
        },
        [basicLandCounts, dispatch],
    );

    const basicLandTotal = Object.values(basicLandCounts).reduce((prev, colorCount) => prev + colorCount, 0);
    const nonBasicLandTotal = nonBasics.length;
    const landTotal = basicLandTotal + nonBasicLandTotal;

    const pipCounts = getPipCounts(deck);

    const sortedNonBasics = [...nonBasics];
    sortedNonBasics.sort((a, b) => a.frontFace.name > b.frontFace.name ? 1 : -1);

    return (
        <>
            <PanelHeading>
                <div className="o-h-list o-h-list--baseline">
                    <Heading tag="h2" size="large">Lands</Heading>
                    {(landTotal > 0 && <Heading tag="span" size="small">({landTotal})</Heading>)}
                </div>
            </PanelHeading>
            {isPanelOpen && (
                <div className="c-panel__bd">
                    <Heading tag="h3" size="medium">Basic Lands</Heading>
                    <div className="u-vr" />
                    <BasicLandForm
                        colors={colors}
                        pipCounts={pipCounts}
                        basicLandCounts={basicLandCounts}
                        onInputChange={onInputChange}
                        onArtModalOpen={setSelectedColor}
                    />
                    <div className="u-vr u-vr--x4" />
                    <div className="o-sidebar-layout">
                        <div>
                            <Heading tag="h3" size="medium">Non-Basic Lands</Heading>
                            <div className="u-vr" />
                            <LoadingWrapper status={landStatus}>
                                <ul className="o-full-grid">
                                    {nonBasicOptions.map(option => (
                                        <li key={option.id}>
                                            <CardOption
                                                onToggle={() => onToggleOption(option)}
                                                option={option}
                                                isSelected={nonBasics.includes(option)}
                                                isFocusOpen={option.id === landFocusId}
                                                openFocus={() => setLandFocusId(option.id)}
                                                closeFocus={() => setLandFocusId(null)}
                                                disabled={false}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </LoadingWrapper>
                        </div>
                        <aside>
                            <Heading tag="h3" size="medium">Current Deck</Heading>
                            <div className="u-vr" />
                            <ul>
                                {colors.map(color => (
                                    <li key={color}>
                                        <div className="o-h-list o-h-list--center">
                                            <button type="button" onClick={() => onAddBasicLand(color)}>
                                                <img src={PLUS_SVG} width={22} height={22} alt="Add 1 land" />
                                            </button>
                                            {basicLandCounts[color] > 0 && (
                                                <button type="button" onClick={() => onSubtractBasicLand(color)}>
                                                    <img src={MINUS_SVG} width={22} height={22} alt="Subtract 1 land" />
                                                </button>
                                            )}
                                            <span>
                                                {basicLandCounts[color] !== 1 && `${basicLandCounts[color]} ${PLURAL_LAND_NAMES[color]}`}
                                                {basicLandCounts[color] === 1 && `${basicLandCounts[color]} ${SINGULAR_LAND_NAMES[color]}`}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                                {sortedNonBasics.map(land => (
                                    <li key={land.id}>
                                        <DeleteItem onDelete={() => onToggleOption(land)}>
                                            {land.frontFace.name}
                                        </DeleteItem>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            )}
            <LandArtModal
                onClose={onArtModalClose}
                color={selectedColor ?? Color.WHITE}
                isOpen={selectedColor != null}
                options={landArtOptions[selectedColor ?? Color.WHITE]}
                onSelect={onArtSelect}
                selectedOption={landArtByColor[selectedColor ?? Color.WHITE]}
            />
        </>
    );
};

export default LandPanel;
