import type { ValueResponse } from '@/apis/profile';
import type { Value } from '@/apis/question';

import type { Label } from '../type';

// TODO: id가 아닌 type 항목으로 필터링 할 예정
const TYPE_INDEX_MAP = {
  life: [0, 6],
  job: [5, 11],
  love: [11, 15],
} as const;

const LABEL_INDEX_MAP = {
  '라이프 가치관': [0, 6],
  연애관: [5, 11],
  '직업 가치관': [10, 15],
};

export const convertLabelToType = (label: Label): Value => {
  switch (label) {
    case '라이프 가치관':
      return 'life';
    case '연애관':
      return 'love';
    default:
      return 'job';
  }
};

export const convertTypeToLabel = (type: ValueResponse['type']) => {
  switch (type) {
    case '사랑':
      return '연애관';
    case '일':
      return '직업';
    default:
      return '라이프';
  }
};

export const sliceLabelToTitle = (label: Label) => {
  switch (label) {
    case '라이프 가치관':
      return '라이프';
    case '연애관':
      return '연애';
    default:
      return '일, 직업';
  }
};

export const filterValueList = (valueResponse: Omit<ValueResponse, 'type'>[], label: Label) => {
  switch (label) {
    case '라이프 가치관':
      return valueResponse?.filter(({ id }) => id < LABEL_INDEX_MAP[label][1]);

    case '연애관':
      return valueResponse.filter(
        ({ id }) => id > LABEL_INDEX_MAP[label][0] && id < LABEL_INDEX_MAP[label][1],
      );

    case '직업 가치관':
      return valueResponse.filter(({ id }) => id > LABEL_INDEX_MAP[label][0]);
  }
};

export const sliceOriginalResponse = (
  originalRes: Omit<ValueResponse, 'type'>[],
  type: Value,
): Omit<ValueResponse, 'type'>[] => {
  switch (type) {
    case 'life':
      return originalRes.filter(({ id }) => id > TYPE_INDEX_MAP[type][1]);
    case 'job':
      return originalRes.filter(
        ({ id }) => id < TYPE_INDEX_MAP[type][0] && id > TYPE_INDEX_MAP[type][1],
      );
    default:
      return originalRes.filter(({ id }) => id < TYPE_INDEX_MAP[type][0]);
  }
};
