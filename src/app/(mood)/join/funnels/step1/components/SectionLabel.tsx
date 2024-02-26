import CheckIcon from '@/assets/CheckIcon';

type SectionLabelProps = {
  label: string;
  isCheck: boolean;
};

export default function SectionLabel({ label, isCheck }: SectionLabelProps) {
  return (
    <div className="mb-2 flex items-center gap-x-1">
      <label htmlFor={label} className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </label>
      {isCheck && <CheckIcon />}
    </div>
  );
}
