/*
 * 민감한 환경 변수는 작성하지 않습니다. 상수로 관리하게 되면 `Sources` 탭에 노출되기 때문입니다.
 */

export const IS_DEV = process.env.NODE_ENV === 'development';

export const BASE_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN ?? 'http://localhost:3000';

export const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL;
