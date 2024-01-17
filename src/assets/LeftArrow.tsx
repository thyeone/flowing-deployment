import type { SVGProps } from 'react';

const LeftArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[#212529] dark:text-white"
      {...props}
    >
      <path d="M8 5L1 12L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
};

export default LeftArrow;
