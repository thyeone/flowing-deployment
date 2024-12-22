'use client';

import { Slot } from '@radix-ui/react-slot';
import { m } from 'framer-motion';
import React, {
  RefObject,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { fadeInOut } from '@/constants';

import { AnimatePortal } from './Overlay';

type DropdownPosition = {
  top: number;
  left: number;
  width: number;
  triggerHeight: number;
  popoverHeight: number;
  popoverWidth: number;
};

type Position =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

type OffsetValue = number | { mainAxis?: number; crossAxis?: number };

interface PopoverContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  trigger: 'click' | 'hover';
  contentPosition: DropdownPosition;
  setContentPosition: React.Dispatch<React.SetStateAction<DropdownPosition>>;
  contentRef: RefObject<HTMLDivElement>;
  triggerRef: RefObject<HTMLDivElement>;
  position: Position;
  offset: OffsetValue;
}

const PopoverContext = createContext<PopoverContextType | null>(null);

function usePopoverContext() {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error();
  }

  return context;
}

export function Popover({
  children,
  trigger = 'click',
  position = 'bottom',
  offset = 0,
}: PropsWithStrictChildren<{
  trigger?: 'click' | 'hover';
  position?: Position;
  offset?: OffsetValue;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [contentPosition, setContentPosition] = useState<DropdownPosition>({
    top: 0,
    left: 0,
    width: 0,
    triggerHeight: 0,
    popoverHeight: 0,
    popoverWidth: 0,
  });

  useEffect(() => {
    if (trigger === 'click' && isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(event.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, trigger]);

  const memoizedValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      trigger,
      contentPosition,
      setContentPosition,
      contentRef,
      triggerRef,
      position,
      offset,
    }),
    [isOpen, trigger, contentPosition, position, offset],
  );

  return <PopoverContext.Provider value={memoizedValue}>{children}</PopoverContext.Provider>;
}

function Trigger({ children }: PropsWithStrictChildren) {
  const { setContentPosition, isOpen, setIsOpen, contentRef, trigger, triggerRef } =
    usePopoverContext();

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const eventHandlers =
    trigger === 'hover'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            e.stopPropagation();
            onOpen();
          },
          onMouseLeave: (e: React.MouseEvent) => {
            e.stopPropagation();
            onClose();
          },
        }
      : {
          onClick: (e: React.MouseEvent) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          },
        };

  useEffect(() => {
    if (isOpen && triggerRef.current && contentRef.current) {
      const rect = triggerRef.current?.getBoundingClientRect();
      const dropdownRect = contentRef.current.getBoundingClientRect();
      setContentPosition({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
        triggerHeight: rect.height,
        popoverHeight: dropdownRect.height,
        popoverWidth: dropdownRect.width,
      });
    }
  }, [isOpen]);

  return (
    <Slot ref={triggerRef} {...eventHandlers}>
      {children}
    </Slot>
  );
}

function Content({ children }: PropsWithStrictChildren) {
  const { contentPosition, isOpen, contentRef, setIsOpen, position, offset, trigger } =
    usePopoverContext();

  const getOffsetValues = (): { mainAxis: number; crossAxis: number } => {
    if (typeof offset === 'number') {
      return { mainAxis: offset, crossAxis: 0 };
    }
    return {
      mainAxis: offset.mainAxis ?? 0,
      crossAxis: offset.crossAxis ?? 0,
    };
  };

  const getPositionStyles = () => {
    const { top, left, width, triggerHeight, popoverHeight, popoverWidth } = contentPosition;
    const { mainAxis, crossAxis } = getOffsetValues();

    switch (position) {
      case 'top':
        return {
          top: top - popoverHeight - mainAxis - triggerHeight,
          left: left + (width - popoverWidth) / 2 + crossAxis,
        };
      case 'top-left':
        return {
          top: top - popoverHeight - mainAxis - triggerHeight,
          left: left + crossAxis,
        };
      case 'top-right':
        return {
          top: top - popoverHeight - mainAxis - triggerHeight,
          left: left + width - popoverWidth + crossAxis,
        };
      case 'bottom':
        return {
          top: top + mainAxis,
          left: left + (width - popoverWidth) / 2 + crossAxis,
        };
      case 'bottom-left':
        return {
          top: top + mainAxis,
          left: left + crossAxis,
        };
      case 'bottom-right':
        return {
          top: top + mainAxis,
          left: left - popoverWidth - crossAxis + width,
        };
      case 'left':
        return {
          top: top + (triggerHeight - popoverHeight) / 2 + crossAxis,
          left: left - popoverWidth - mainAxis,
        };
      case 'right':
        return {
          top: top + (triggerHeight - popoverHeight) / 2 + crossAxis,
          left: left + width + mainAxis,
        };
      default:
        return {
          top: top + triggerHeight + mainAxis,
          left: left + crossAxis,
        };
    }
  };

  useEffect(() => {
    if (trigger === 'hover') {
      const handleScroll = () => {
        setIsOpen(false);
      };

      document.addEventListener('scroll', handleScroll);

      return () => document.removeEventListener('scroll', handleScroll);
    }
  }, [trigger, setIsOpen]);

  return (
    <AnimatePortal isOpen={isOpen}>
      <m.div
        {...fadeInOut}
        ref={contentRef}
        onClick={() => setIsOpen(false)}
        style={{
          position: 'fixed',
          ...getPositionStyles(),
          zIndex: 1000,
        }}
      >
        {children}
      </m.div>
    </AnimatePortal>
  );
}

Popover.Trigger = Trigger;
Popover.Content = Content;
