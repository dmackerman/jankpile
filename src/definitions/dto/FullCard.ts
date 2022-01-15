import Rarity from './Rarity';

type CardPart = {
    object: string,
    id: string,
    component: string,
    name: string,
    type_line: string,
    uri: string,
}

type Legality = 'legal' | 'not_legal';

type Game = 'arena' | 'paper' | 'mtgo';

type FullCard = {
    object: string,
    id: string,
    oracle_id: string,
    multiverse_ids: number[],
    mtgo_id: number,
    arena_id: number,
    tcgplayer_id: number,
    cardmarket_id: number,
    name: string,
    lang: string,
    released_at: string,
    uri: string,
    scryfall_uri: string,
    layout: string,
    highres_image: boolean,
    image_status: string,
    image_uris: {
        small: string,
        normal: string,
        large: string,
        png: string,
        art_crop: string,
        border_crop: string,
    },
    mana_cost: string,
    cmc: number,
    type_line: string,
    oracle_text: string,
    power: string,
    toughness: string,
    colors: string[],
    color_identity: string[],
    keywords: string[],
    all_parts: CardPart[],
    legalities: {
        standard: Legality,
        future: Legality,
        historic: Legality,
        gladiator: Legality,
        pioneer: Legality,
        modern: Legality,
        legacy: Legality,
        pauper: Legality,
        vintage: Legality,
        penny: Legality,
        commander: Legality,
        brawl: Legality,
        historicbrawl: Legality,
        alchemy: Legality,
        paupercommander: Legality,
        duel: Legality,
        oldschool: Legality,
        premodern: Legality,
    },
    games: Game[],
    reserved: boolean,
    foil: boolean,
    nonfoil: boolean,
    finishes: string[],
    oversized: boolean,
    promo: boolean,
    reprint: boolean,
    variation: boolean,
    set_id: string,
    set: string,
    set_name: string,
    set_type: string,
    set_uri: string,
    set_search_uri: string,
    scryfall_set_uri: string,
    rulings_uri: string,
    prints_search_uri: string,
    collector_number: string,
    digital: boolean,
    rarity: Rarity,
    card_back_id: string,
    artist: string,
    artist_ids: string[],
    illustration_id: string,
    border_color: string,
    frame: string,
    frame_effects: string[],
    security_stamp: string,
    full_art: boolean,
    textless: boolean,
    booster: boolean,
    story_spotlight: boolean,
    edhrec_rank: number,
    preview: {
        source: string,
        source_uri: string,
        previewed_at: string,
    },
    prices: Record<string, string | null>,
    related_uris: Record<string, string>,
    purchase_uris: Record<string, string>,
};

export default FullCard;
