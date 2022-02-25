import React from 'react';
import Card from '../../definitions/Card';
import getManaValues from '../../lib/utils/getManaValues';
import DeleteItem from '../common/DeleteItem';
import Heading from '../common/Heading';

type Props = {
    spells: Card[],
    onToggleOption: (card: Card) => void,
};

const MAX_MANA_VALUE = 7;

const SelectedSpellList: React.FC<Props> = ({ spells, onToggleOption }) => {
    const manaValues = getManaValues(spells, MAX_MANA_VALUE);
    const maxManaValue = Math.max(...Object.values(manaValues));
    console.log({ manaValues, maxManaValue });

    return (
        <>
            <div className="o-h-list o-h-list--center">
                <Heading size="medium"><h3>Current Deck</h3></Heading>
                <button type="button">
                    <svg viewBox="0 0 44 44" width={44} height={44}>
                        <rect x={1} y={0} width={5} height={44} fill="#F5EFDE" />
                        <rect x={7} y={0} width={5} height={44} fill="#F5EFDE" />
                        <rect x={13} y={0} width={5} height={44} fill="#F5EFDE" />
                        <rect x={19} y={0} width={5} height={44} fill="#F5EFDE" />
                        <rect x={25} y={0} width={5} height={44} fill="#F5EFDE" />
                        <rect x={31} y={0} width={5} height={44} fill="#F5EFDE" />
                        <rect x={37} y={0} width={5} height={44} fill="#F5EFDE" />
                        <rect x={1} y={44 - manaValues[1]} width={5} height={44 * manaValues[1] / maxManaValue} fill="#745206" />
                        <rect x={7} y={44 - manaValues[2]} width={5} height={44 * manaValues[2] / maxManaValue} fill="#745206" />
                        <rect x={13} y={44 - manaValues[3]} width={5} height={44 * manaValues[3] / maxManaValue} fill="#745206" />
                        <rect x={19} y={44 - manaValues[4]} width={5} height={44 * manaValues[4] / maxManaValue} fill="#745206" />
                        <rect x={25} y={44 - manaValues[5]} width={5} height={44 * manaValues[5] / maxManaValue} fill="#745206" />
                        <rect x={31} y={44 - manaValues[6]} width={5} height={44 * manaValues[6] / maxManaValue} fill="#745206" />
                        <rect x={37} y={44 - manaValues[7]} width={5} height={44 * manaValues[7] / maxManaValue} fill="#745206" />
                    </svg>
                </button>
            </div>
            <ul>
                {spells.map(spell => (
                    <li key={spell.id}>
                        <DeleteItem onDelete={() => onToggleOption(spell)}>
                            {spell.name}
                        </DeleteItem>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SelectedSpellList;