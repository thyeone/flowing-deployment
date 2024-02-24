export const MIN_Y = 60 as const;

export const HEADER_HEIGHT = 80 as const;

export const BOTTOM_HEIGHT = 170 as const;

/**
 * 바텀시트 헤더 + 하단 버튼 영역 + 바텀 시트 상단 여백
 */
export const MAX_BOTTOM_SHEET_CONTENT = HEADER_HEIGHT + BOTTOM_HEIGHT + MIN_Y;
