type PropsWithStrictChildren<P = unknown, T extends React.ReactNode = ReactNode> = P & {
  children: T;
};

type GenderType = 'MALE' | 'FEMALE';

type BodyType = '마름' | '탄탄 슬림' | '보통' | '통통' | '근육';
