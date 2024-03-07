import { AxiosError } from 'axios';

export class ApiError extends AxiosError {
  code: string; // TODO: 추후 서비스 코드 리터럴 타입 적용
  message;
  constructor(code: string, message: string) {
    super(message);
    this.message = message;
    this.code = code;
  }
}
