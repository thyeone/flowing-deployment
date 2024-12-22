import { SquareCheckedBox, SquareUnCheckedBox } from '@/assets/SquareCheckBox';
import { cn } from '@/utils';

type CheckBoxProps = React.ComponentPropsWithoutRef<'input'> & {
  isChecked?: boolean;
};

export function CheckBox({ id, isChecked, onChange, className, children, ...rest }: CheckBoxProps) {
  return (
    <label htmlFor={id} className="cursor-pointer">
      <input
        id={id}
        type="checkbox"
        className={cn('hidden appearance-none', className)}
        checked={isChecked}
        onChange={onChange}
        {...rest}
      />
      {isChecked ? <SquareCheckedBox /> : <SquareUnCheckedBox />}
    </label>
  );
}
