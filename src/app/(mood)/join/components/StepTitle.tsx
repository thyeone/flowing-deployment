type StepTitleProps = {
  topTitle: string;
  bottomTitle: string;
  subDescription: string;
};

export default function StepTitle({ topTitle, bottomTitle, subDescription }: StepTitleProps) {
  return (
    <div className="pt-4">
      <p className="text-xl font-bold text-gray-900">{topTitle}</p>
      <p className="text-xl font-bold text-gray-900">{bottomTitle}</p>
      <p className="mb-5 mt-2 text-xs text-gray-500">{subDescription}</p>
    </div>
  );
}
