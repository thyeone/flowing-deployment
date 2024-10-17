export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: '#00000000',
  brand: '#EC76AB',
  error: '#FF1010',
  primary: {
    50: '#FBE3EE',
    100: '#F6B8D4',
    200: '#F288B7',
    300: '#EE5599',
    400: '#EB2482',
    500: '#E8006B',
    600: '#D70067',
    700: '#C10062',
    800: '#AB005D',
    900: '#850055',
  },
  gray: {
    50: '#FAFAFD',
    100: '#F5F5F8',
    200: '#EEEEF1',
    300: '#E0E0E3',
    400: '#BDBDC0',
    500: '#9E9EA1',
    600: '#757578',
    700: '#616164',
    800: '#424245',
    900: '#212123',
  },
} as const;

export const colorKeys = Object.keys(colors);
