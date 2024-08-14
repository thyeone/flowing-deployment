'use client';

import React, { createContext, useContext, useReducer } from 'react';

type Tab = 'gender' | 'region' | 'age';
type Age = { from: number; to: number };
type State = {
  selectedTab: Tab;
  gender: GenderType | null;
  region: string | null;
  age: Age;
};

type Action =
  | { type: 'SET_TAB'; payload: Tab }
  | { type: 'SET_GENDER'; payload: GenderType | null }
  | { type: 'SET_REGION'; payload: string | null }
  | { type: 'SET_AGE'; payload: Age };

type FeedFilterContextValue = {
  state: State;
  setSelectedTab: (tab: Tab) => void;
  setGender: (gender: GenderType) => void;
  setRegion: (region: string) => void;
  setAge: (range: Age) => void;
};

const initialState: State = {
  selectedTab: 'gender',
  gender: null,
  region: null,
  age: { from: 0, to: 60 },
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, selectedTab: action.payload };
    case 'SET_GENDER':
      return { ...state, gender: action.payload };
    case 'SET_REGION':
      return { ...state, region: action.payload };
    case 'SET_AGE':
      return { ...state, ageRange: action.payload };
    default:
      return state;
  }
};

const FeedFilterContext = createContext<FeedFilterContextValue | null>(null);

export default function FeedFilterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const setSelectedTab = (tab: Tab) => {
    dispatch({ type: 'SET_TAB', payload: tab });
  };

  const setGender = (gender: GenderType) => {
    dispatch({ type: 'SET_GENDER', payload: gender });
  };

  const setRegion = (region: string) => {
    dispatch({ type: 'SET_REGION', payload: region });
  };

  const setAge = (range: Age) => {
    dispatch({ type: 'SET_AGE', payload: range });
  };

  return (
    <FeedFilterContext.Provider
      value={{
        state,
        setSelectedTab,
        setGender,
        setRegion,
        setAge,
      }}
    >
      {children}
    </FeedFilterContext.Provider>
  );
}

export function useFeedFilterContext() {
  const feedFilterContext = useContext(FeedFilterContext);

  if (!feedFilterContext) throw new Error('부모 트리에서 TabContext를 사용해주세요.');

  return { ...feedFilterContext };
}
