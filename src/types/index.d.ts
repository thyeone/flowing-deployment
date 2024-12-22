type PropsWithStrictChildren<P = unknown, T extends React.ReactNode = ReactNode> = P & {
  children: T;
};

type RenderPropsChildren<P = unknown, T = unknown> = P & {
  children: ((props: T) => React.ReactNode) | React.ReactNode;
};

type CommonResponse<T = any> = {
  code: string;
  message: string;
  data: T;
};

type OverlayProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

type Payload = {
  authority: string;
  exp: number;
  id: string;
};

type FileValue = {
  files: {
    uuid: string;
    path: string;
  }[];
};

type GenderType = 'MALE' | 'FEMALE';
