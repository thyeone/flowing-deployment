'use client';

import React, { createContext, useContext, useReducer, useState } from 'react';

type Tab = 'gender' | 'address' | 'age';
type Age = { min: number; max: number };
type Gender = Record<GenderType, boolean>;
type FilterState = {
  selectedTab: Tab;
  gender: Gender;
  address: number[];
  age: Age;
};

type Filter = {
  channelId: number;
} & FilterState;

type Action =
  | { type: 'SET_TAB'; payload: Tab }
  | { type: 'SET_GENDER'; payload: Gender }
  | { type: 'SET_ADDRESS'; payload: number[] }
  | { type: 'SET_AGE'; payload: Age }
  | { type: 'RESET' };

type FeedFilterContextValue = {
  filterState: FilterState;
  setSelectedTab: (tab: Tab) => void;
  setGender: (gender: Gender) => void;
  setAddress: (address: number[]) => void;
  setAge: (range: Age) => void;
  reset: () => void;
  setChannelId: (channelId: number) => void;
  filter: Filter;
  setFilterResult: () => void;
};

const initialState: FilterState = {
  selectedTab: 'gender',
  gender: { MALE: true, FEMALE: true },
  address: [],
  age: { min: 1, max: 100 },
};

const initialFilter: Filter = {
  channelId: 0,
  ...initialState,
};
const reducer = (state: FilterState, action: Action) => {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, selectedTab: action.payload };
    case 'SET_GENDER':
      return { ...state, gender: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'RESET':
      return { ...initialState, selectedTab: state.selectedTab };
    default:
      return state;
  }
};

const FeedFilterContext = createContext<FeedFilterContextValue | null>(null);

export default function FeedFilterProvider({ children }: { children: React.ReactNode }) {
  const [filterState, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState(initialFilter);

  const setSelectedTab = (tab: Tab) => {
    dispatch({ type: 'SET_TAB', payload: tab });
  };

  const setGender = (gender: Gender) => {
    dispatch({ type: 'SET_GENDER', payload: gender });
  };

  const setAddress = (address: number[]) => {
    dispatch({ type: 'SET_ADDRESS', payload: address });
  };

  const setAge = (range: Age) => {
    dispatch({ type: 'SET_AGE', payload: range });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const setChannelId = (channelId: number) => {
    setFilter({ ...filter, channelId });
  };

  const setFilterResult = () => {
    setFilter({ ...filterState, channelId: filter.channelId });
  };

  return (
    <FeedFilterContext.Provider
      value={{
        filterState,
        setSelectedTab,
        setGender,
        setAddress,
        setAge,
        reset,
        setChannelId,
        filter,
        setFilterResult,
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
