import { Dispatch } from 'react';
import { AdjustColorActions } from '../../color-reducer';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

type RelatedColorsProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const RelatedColors = ({ hexColor, dispatch }: RelatedColorsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette
        title="Triad Colors"
        hexColors={triadColors}
        dispatch={dispatch}
      />
      <RelatedColorPalette
        title="Complimentary Colors"
        hexColors={complementColors}
        dispatch={dispatch}
      />
    </>
  );
};

export default RelatedColors;
