'use client';

import React, { createContext, useContext, useReducer } from 'react';

import useCustomSearchParams from '@/hooks/useCustomSearchParams';
import { ageToDateString, birthToAge } from '@/utils';

type Tab = 'gender' | 'address' | 'age';
type Age = { min: number; max: number };
type Gender = Record<GenderType, boolean>;
type FilterState = {
  selectedTab: Tab;
  gender: Gender;
  address: string[];
  age: Age;
};

type FeedParams = {
  channelId: number | null;
  gender: string;
  address: string;
  minAge: string;
  maxAge: string;
};

type Action =
  | { type: 'SET_TAB'; payload: Tab }
  | { type: 'SET_GENDER'; payload: Gender }
  | { type: 'SET_ADDRESS'; payload: string[] }
  | { type: 'SET_AGE'; payload: Age }
  | { type: 'RESET' };

type FeedFilterContextValue = {
  filterState: FilterState;
  setSelectedTab: (tab: Tab) => void;
  setGender: (gender: Gender) => void;
  setAddress: (address: string[]) => void;
  setAge: (range: Age) => void;
  reset: () => void;
  setChannelId: (channelId: number | null) => void;
  feedsParams: FeedParams;
  setFeedsParams: () => void;
};

const initialState: FilterState = {
  selectedTab: 'gender',
  gender: { MALE: true, FEMALE: true },
  address: [],
  age: { min: 1, max: 100 },
};

const initialFeedParams = {
  gender: Object.keys(initialState.gender)
    .filter((key) => initialState.gender[key as GenderType])
    .join(','),
  address: initialState.address.join(','),
  maxAge: ageToDateString({ age: initialState.age.min }),
  minAge: ageToDateString({ age: initialState.age.max, firstDay: true }),
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
  const { searchParams, setSearchParams } = useCustomSearchParams();

  const iniitialFilterState = {
    selectedTab: 'gender' as Tab,
    gender: {
      MALE: searchParams.gender?.split(',').includes('MALE') ?? true,
      FEMALE: searchParams.gender?.split(',').includes('FEMALE') ?? true,
    },
    address: searchParams.address?.split(',') ?? [],
    age: {
      min: birthToAge({ birth: searchParams.maxAge }) || 1,
      max: birthToAge({ birth: searchParams.minAge }) || 100,
    },
  };
  const [filterState, dispatch] = useReducer(reducer, iniitialFilterState);

  const feedsParams = {
    channelId: Number(searchParams.channelId) || null,
    gender: searchParams.gender || initialFeedParams.gender,
    address: searchParams.address || initialFeedParams.address,
    minAge: searchParams.minAge || initialFeedParams.minAge,
    maxAge: searchParams.maxAge || initialFeedParams.maxAge,
  };

  const setSelectedTab = (tab: Tab) => {
    dispatch({ type: 'SET_TAB', payload: tab });
  };

  const setGender = (gender: Gender) => {
    dispatch({ type: 'SET_GENDER', payload: gender });
  };

  const setAddress = (address: string[]) => {
    dispatch({ type: 'SET_ADDRESS', payload: address });
  };

  const setAge = (range: Age) => {
    dispatch({ type: 'SET_AGE', payload: range });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const setChannelId = (channelId: number | null) => {
    setSearchParams({ ...searchParams, channelId: channelId ? String(channelId) : '' });
  };

  const setFeedsParams = () => {
    setSearchParams({
      ...searchParams,
      gender: Object.keys(filterState.gender).filter(
        (key) => filterState.gender[key as GenderType],
      ),
      address: filterState.address,
      maxAge: ageToDateString({ age: filterState.age.min }),
      minAge: ageToDateString({ age: filterState.age.max, firstDay: true }),
    });
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
        feedsParams,
        setFeedsParams,
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
