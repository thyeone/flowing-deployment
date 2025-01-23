export const getMbtiAlias = (mbti: string): string => {
  switch (mbti) {
    case 'ENTJ':
      return 'ENTJ - 통솔자';
    case 'ENTP':
      return 'ENTP - 변론가';
    case 'INTJ':
      return 'INTJ - 전략가';
    case 'INTP':
      return 'INTP - 논리술사';
    case 'INFJ':
      return 'INFJ - 옹호자';
    case 'INFP':
      return 'INFP - 중재자';
    case 'ENFJ':
      return 'ENFJ - 선도자';
    case 'ENFP':
      return 'ENFP - 활동가';
    case 'ISTJ':
      return 'ISTJ - 현실주의자';
    case 'ISFJ':
      return 'ISFJ - 수호자';
    case 'ESTJ':
      return 'ESTJ - 경영자';
    case 'ESFJ':
      return 'ESFJ - 집정관';
    case 'ISFP':
      return 'ISFP - 모험가';
    case 'ISTP':
      return 'ISTP - 장인';
    case 'ESFP':
      return 'ESFP - 연예인';
    default:
      return 'ESTP - 사업가';
  }
};
