import axios from 'axios';
import Color from '../../definitions/Color';
import CardResponse from '../../definitions/dto/CardResponse';
import Format from '../../definitions/Format';
import Identity from '../../definitions/Identity';

const ENDPOINT = 'https://api.scryfall.com/cards/search?q='

const getApiFormat = (format: Format) => (format === 'historic') ? 'historicbrawl' : 'brawl';

export const getCommander = async (identity: Identity): Promise<CardResponse> => {
    const { format, colors } = identity;
    const apiFormat = getApiFormat(format);

    const cardQuery = `id=${colors.join('')}+f:${apiFormat}+(is:commander OR t:planeswalker)+game:arena`;

    const response = await axios.get(`${ENDPOINT}${cardQuery}`);
    return response.data;
};

export const getSpells = async (identity: Identity, query?: string): Promise<CardResponse> => {
    const { format, colors } = identity;
    const apiFormat = getApiFormat(format);
    const cardQuery = `id<=${colors.join('+')}+f:${apiFormat}+game:arena+-t:land`;

    const response = await axios.get(`${ENDPOINT}${cardQuery}`);
    return response.data;
};

export const getBasicLands = async (color: Color): Promise<CardResponse> => {
    const cardQuery = `id=${color}+f:brawl+t:land+t:basic+game:arena&unique=art`;

    const response = await axios.get(`${ENDPOINT}${cardQuery}`);
    return response.data;
};

export const getNonBasicLands = async (colors: Color[]): Promise<CardResponse> => {
    const cardQuery = `id<=${colors.join('+')}+f:brawl+t:land+game:arena`;

    const response = await axios.get(`${ENDPOINT}${cardQuery}`);
    return response.data;
};