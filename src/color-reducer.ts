import { rgb } from 'color-convert';

type HexColor = `#${string}`;
//ts is saying if i validate that thi is the right type and it will believe me
const isHexColor = (s: string): s is HexColor => {
  return s.startsWith('#');
};
type ColorFormats = 'rgb' | 'hex' | 'hsl' | 'hsv';

type ActionTypes = `update-${ColorFormats}-color`;
export type UpdateHEXColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};
// /array as needed for the library used
export type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

export type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export type AdjustColorActions = UpdateHEXColorAction | UpdateRGBColorAction;
export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }
  return state;
};

//everything based on hex colors - because the input color filed that is built into the DOM gives hex colors as event target value
