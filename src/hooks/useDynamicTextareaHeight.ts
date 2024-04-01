import { useRef } from 'react';

const useDynamicTextareaHeight = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>();

  const handleResizeHeight = () => {
    if (!textareaRef.current) return;

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      }
    }, 0);
  };

  return { textareaRef, handleResizeHeight };
};

export default useDynamicTextareaHeight;
