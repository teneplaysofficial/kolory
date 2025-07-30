import rawColors from './kolory.json';

const colors = rawColors;

type ColorName = Exclude<keyof typeof colors, '$schema'>;
type Format = keyof (typeof colors)[ColorName];

type Kolory = {
  [F in Format]: {
    [C in ColorName]: string;
  };
};

const kolory: Kolory = {
  hex: {},
  rgb: {},
  rgba: {},
  hsl: {},
  hsla: {},
} as Kolory;

for (const [name, values] of Object.entries(colors)) {
  if (name === '$schema') continue;
  for (const [format, value] of Object.entries(values)) {
    kolory[format as Format][name as ColorName] = value as string;
  }
}

export const hex = kolory.hex;
export const rgb = kolory.rgb;
export const rgba = kolory.rgba;
export const hsl = kolory.hsl;
export const hsla = kolory.hsla;

export { kolory };
export default kolory;
