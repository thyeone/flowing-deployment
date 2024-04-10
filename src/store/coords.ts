import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import { COORDS_KEY } from '@/constants';

type CoordsState = {
  lat: number | null;
  lon: number | null;
  actions: {
    setCoords: (lat: number, lon: number) => void;
  };
};

const initialState = {
  lat: null,
  lon: null,
};

const useCoordsStore = create(
  devtools(
    persist<CoordsState>(
      (set) => ({
        ...initialState,
        actions: {
          setCoords: (lat: number, lon: number) => {
            set((state) => ({ ...state, lat, lon }));
          },
        },
      }),
      {
        name: COORDS_KEY,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export const useLatitude = () => useCoordsStore((state) => state.lat);
export const useLongitude = () => useCoordsStore((state) => state.lon);

export const useCoordsActions = () => useCoordsStore((state) => state.actions);
