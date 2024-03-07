export type Value = 'life' | 'job' | 'love';

export type ValueResponse = {
  id: number;
  type: Value;
  question: string;
};
