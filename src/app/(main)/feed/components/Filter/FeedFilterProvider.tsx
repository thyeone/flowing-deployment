'use client';

import React, { createContext, useContext, useReducer } from 'react';

type Tab = 'gender' | 'region' | 'age';
type Age = { min: number; max: number };
type Gender = Record<GenderType, boolean>;
type State = {
  selectedTab: Tab;
  gender: Gender;
  region: number[];
  age: Age;
  channelId: number;
};

type Action =
  | { type: 'SET_TAB'; payload: Tab }
  | { type: 'SET_GENDER'; payload: Gender }
  | { type: 'SET_REGION'; payload: number[] }
  | { type: 'SET_AGE'; payload: Age }
  | { type: 'SET_CHANNEL_ID'; payload: number }
  | { type: 'RESET' };

type FeedFilterContextValue = {
  state: State;
  setSelectedTab: (tab: Tab) => void;
  setGender: (gender: Gender) => void;
  setRegion: (region: number[]) => void;
  setAge: (range: Age) => void;
  reset: () => void;
  setChannelId: (channelId: number) => void;
};

const initialState: State = {
  selectedTab: 'gender',
  gender: { MALE: true, FEMALE: true },
  region: [],
  age: { min: 1, max: 100 },
  channelId: 0,
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
      return { ...state, age: action.payload };
    case 'RESET':
      return { ...initialState, channelId: state.channelId };
    case 'SET_CHANNEL_ID':
      return { ...state, channelId: action.payload };
    default:
      return state;
  }
};

const FeedFilterContext = createContext<FeedFilterContextValue | null>(null);

export default function FeedFilterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedTab = (tab: Tab) => {
    dispatch({ type: 'SET_TAB', payload: tab });
  };

  const setGender = (gender: Gender) => {
    dispatch({ type: 'SET_GENDER', payload: gender });
  };

  const setRegion = (region: number[]) => {
    dispatch({ type: 'SET_REGION', payload: region });
  };

  const setAge = (range: Age) => {
    dispatch({ type: 'SET_AGE', payload: range });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const setChannelId = (channelId: number) => {
    dispatch({ type: 'SET_CHANNEL_ID', payload: channelId });
  };

  return (
    <FeedFilterContext.Provider
      value={{
        state,
        setSelectedTab,
        setGender,
        setRegion,
        setAge,
        reset,
        setChannelId,
      }}
    >
      {children}
    </FeedFilterContext.Provider>
  );
}

export function useFeedFilterContext() {
  const feedFilterContext = useContext(FeedFilterContext);

  if (!feedFilterContext) throw new Error('부모 트리에서 FeedFilterContext를 사용해주세요.');

  return { ...feedFilterContext };
}
