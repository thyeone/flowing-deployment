'use client';

import { createContext, useContext } from 'react';
import {
  FormProvider,
  type UseFieldArrayReturn,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form';

const FieldArrayContext = createContext<UseFieldArrayReturn<FileValue, 'files', 'id'> | null>(null);

export default function FileFormProvider({ children }: PropsWithStrictChildren) {
  const methods = useForm<FileValue>({
    mode: 'onChange',
    shouldFocusError: false,
  });

  const { control } = methods;

  const fieldArrayMethods = useFieldArray({
    control,
    name: 'files',
    rules: { minLength: 2, maxLength: 6, required: true },
  });

  return (
    <FormProvider {...methods}>
      <FieldArrayContext.Provider value={fieldArrayMethods}>{children}</FieldArrayContext.Provider>
    </FormProvider>
  );
}

export function useFileFormContext() {
  return useFormContext<FileValue>();
}

export function useFileFieldArrayContext() {
  const fileContext = useContext(FieldArrayContext);

  if (!fileContext) throw new Error('FileFormProvider 내부에서 사용해주세요.');

  const { append, remove, fields, replace } = fileContext;

  return { append, remove, fields, replace };
}
