import type { ValueResponse } from '@/apis/profile';
import type { Value } from '@/apis/question';

import type { Label } from '../type';

export const convertLabelToType = (label: Label): ValueResponse['type'] => {
  switch (label) {
    case '라이프 가치관':
      return '인생';
    case '연애관':
      return '사랑';
    default:
      return '일';
  }
};

export const convertTypeToEng = (type: ValueResponse['type']): Value => {
  switch (type) {
    case '사랑':
      return 'love';
    case '일':
      return 'job';
    default:
      return 'life';
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

export const filterValueList = (valueResponse: ValueResponse[], label: Label) => {
  return valueResponse.filter(({ type }) => type === convertLabelToType(label));
};
