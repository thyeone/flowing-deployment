import ImageIcon from '@public/svg/image.svg';
import { Dispatch } from 'react';
import { Mention, MentionsInput } from 'react-mentions';

import { colors } from '@/styles';

import { Button } from './Button';

type BottomInputFieldParams = {
  action: () => any;
  inputRef: React.RefObject<HTMLInputElement>;
  inputValue: string;
  setInputValue: Dispatch<React.SetStateAction<string>>;
  isPending?: boolean;
};

const style = {
  width: '100%',
  height: 'fit-content',
  borderRadius: '8px',
  overflow: 'hidden',

  control: {
    backgroundColor: colors.gray[100],
    padding: '12px 12px',
    fontSize: 14,
    width: '100%',
  },
  input: {
    padding: '12px 12px',
    outline: 0,
  },
  highlighter: { border: 'none', pointerEvent: 'none' },
  suggestions: {
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 13,
    },
    item: {
      padding: '3px 10px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',
      '&focused': {
        backgroundColor: colors.primary[300],
        color: 'white',
      },
    },
  },
};

export default function BottomInputField({
  action,
  inputRef,
  inputValue,
  setInputValue,
  isPending,
}: BottomInputFieldParams) {
  const handleClickRegisterButton = () => {
    action();
  };

  return (
    <div className="max-width fixed bottom-0 z-50 flex h-[64.5px] w-full items-center bg-white shadow-[0_-2px_20px_rgb(0,0,0,0.1)]">
      <button
        type="button"
        className="flex h-10 w-[52px] flex-none items-center justify-center"
        onClick={() => {}}
      >
        <ImageIcon width={24} height={24} />
      </button>
      <MentionsInput
        inputRef={inputRef}
        value={inputValue}
        onChange={(event, newValue, newPlainTextValue, mentions) => {
          setInputValue(newValue);
        }}
        style={style}
      >
        <Mention
          trigger="@"
          data={[]}
          markup="@[__display__](user:__id__)"
          displayTransform={(id, display) => `@${display}`}
          style={{
            position: 'relative',
            color: colors.primary[300],
            zIndex: 1,
            textShadow:
              '1px 1px 1px white, 1px -1px 1px white, -1px 1px 1px white, -1px -1px 1px white',
            pointerEvents: 'none',
          }}
        />
      </MentionsInput>
      <Button
        variant="text"
        disabled={!inputValue || isPending}
        className="h-10 w-16 min-w-fit flex-none px-0 text-sm"
        onClick={handleClickRegisterButton}
      >
        등록
      </Button>
    </div>
  );
}
