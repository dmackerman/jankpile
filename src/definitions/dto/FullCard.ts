type CardPart = {
    object: string,
    id: string,
    component: string,
    name: string,
    type_line: string,
    uri: string,
}

type Legality = 'legal' | 'not_legal' | 'restricted' | 'banned';

type Game = 'arena' | 'paper' | 'mtgo';

type ImageUriMap = {
    small: string,
    normal: string,
    large: string,
    png: string,
    art_crop: string,
    border_crop: string,
};

type CardFace = {
    artist: string,
    cmc: number,
    artist_id: string,
    color_indicator?: string[],
    colors?: string[],
    flavor_text?: string[],
    illustration_id?: string,
    image_uris?: ImageUriMap,
    layout?: string,
    loyalty?: string,
    mana_cost: string,
    name: string,
    object: 'card_face',
    oracle_id?: string,
    oracle_text?: string,
    power?: number,
    printed_name?: string,
    printed_text?: string,
    printed_type_line?: string,
    toughness?: number,
    type_line?: string,
    watermark?: string,
}

type FullCard = {
    arena_id?: number,
    id: string,
    mtgo_id?: number,
    mtgo_foil_id?: number,
    multiverse_ids?: number[],
    tcgplayer_id?: number,
    tcgplayer_etched_id?: number,
    cardmarket_id?: number,
    object: 'card',
    oracle_id: string,
    prints_search_uri: string,
    rulings_uri: string,
    scryfall_uri: string,
    uri: string,
    all_parts?: CardPart[],
    card_faces?: CardFace[],
    cmc: number,
    color_identity: string[],
    color_indicator?: string,
    colors?: string[],
    edhrec_rank?: number,
    hand_modifier?: string,
    keywords: string[],
    layout: string,
    life_modifier?: string,
    loyalty?: string,
    mana_cost?: string,
    name: string,
    oracle_text?: string,
    oversized: boolean,
    power?: string,
    produced_mana?: string[],
    reserved: boolean,
    toughness?: string,
    type_line: string,

    artist?: string,
    booster: boolean,
    border_color: 'black' | 'white' | 'borderless' | 'silver' | 'gold',
    card_back_id: string,
    collector_number: string,
    content_warning?: boolean,
    digital: boolean,
    finishes: string[],
    flavor_name?: string,
    flavor_text?: string,
    frame_effects?: string[],
    frame: string,
    full_art: boolean,
    games: Game,
    highres_image: boolean,
    illustration_id?: string,
    image_status: string,
    image_uris?: ImageUriMap,
    prices: Record<string, string>,
    printed_name?: string,
    printed_text?: string,
    printed_type_line?: string,
    promo: boolean,
    promo_types?: string[],
    purchase_uris: Record<string, string>,
    rarity: string,
    related_uris: Record<string, string>,
    released_at: string,
    reprint: boolean,
    scryfall_set_uri: string,
    set_name: string,
    set_search_uri: string,
    set_type: string,
    set_uri: string,
    set: string,
    set_id: string,
    story_spotlight: boolean,
    textless: boolean,
    variation: boolean,
    variation_of?: string,
    security_stamp?: string,
    watermark?: string,
    lang: string,
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
    foil: boolean,
    nonfoil: boolean,
    artist_ids: string[],
    preview: {
        source: string,
        source_uri: string,
        previewed_at: string,
    },
};

export default FullCard;
