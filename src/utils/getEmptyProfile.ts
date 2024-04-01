import type { MemberResponse } from '@/apis/member';

export const getEmptyProfile = (profile: MemberResponse['profile']) => {
  for (const key in profile) {
    const field = profile[key as keyof MemberResponse['profile']];

    if (!field) return '1';

    if (!Object.keys(field) || (Array.isArray(field) && !field.length)) {
      switch (key) {
        case 'selfIntro':
          return '1';
        case 'address':
          return '1';
        case 'valueResponses':
          return '3';
        case 'images':
          return '5';
      }
    }
  }

  return '6';
};
