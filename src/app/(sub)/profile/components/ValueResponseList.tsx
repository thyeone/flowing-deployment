'use client';

import CheckIcon from '@public/svg/check-24.svg';
import { useWatch } from 'react-hook-form';

import { ValueResponse } from '@/apis/profile';
import Spacing from '@/components/Spacing';
import { useOverlay } from '@/hooks';

import type { Label } from '../type';
import { convertLabelToType, filterValueList } from '../utils';
import MultiValueResponsePopup from './MultiValueResponsePopup';
import { useProfileContext } from './ProfileContext';
import SingleValueResponseEditPopup from './SingleValueResponseEditPopup';

export type ValueResponseListProps = {
  valueResponses: ValueResponse[];
  label: Label;
};

export default function ValueResponseList({ valueResponses, label }: ValueResponseListProps) {
  const { open } = useOverlay();

  const useForm = useProfileContext();
  const { control } = useForm;

  const responses = useWatch({
    control,
    name: 'valueResponses',
  });

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <label className="font-bold">{label}</label>
          <CheckIcon />
        </div>
        <span
          className="cursor-pointer text-sm text-gray-700"
          onClick={() =>
            open(({ isOpen, close }) => (
              <MultiValueResponsePopup
                isOpen={isOpen}
                onClose={close}
                label={label}
                hookForm={useForm}
                type={convertLabelToType(label)}
              />
            ))
          }
        >
          편집
        </span>
      </div>
      <Spacing size={16} />
      <ul className="flex flex-col gap-y-4">
        {filterValueList(responses, label).map(({ id, response, question, type }, index) => (
          <li
            key={id}
            onClick={() => {
              open(({ isOpen, close }) => (
                <SingleValueResponseEditPopup
                  id={id}
                  type={type}
                  headerTitle={label}
                  question={question}
                  hookForm={useForm}
                  isOpen={isOpen}
                  onClose={close}
                />
              ));
            }}
            className="h-auto w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm"
          >
            <div className="flex gap-x-1">
              <span className="font-bold text-primary-400">Q.</span>
              <span className="font-bold">{question}</span>
            </div>
            <div className="mt-4 flex gap-x-1 border-t border-gray-200 py-4">
              <span className="font-bold text-gray-500">A.</span>
              <p className="text-gray-800">{response}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
