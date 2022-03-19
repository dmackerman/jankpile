import Card from '../../definitions/Card';

const getAverageManaValue = (cards: Card[]) => {
    const totalManaValue = cards.reduce(
        (prevValue, card) => prevValue + card.frontFace.manaValue,
        0
    );

    return totalManaValue / cards.length;
};

export default getAverageManaValue;
