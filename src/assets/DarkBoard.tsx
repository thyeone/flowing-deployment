import { fadeInOut } from '@/constants/motions';
import { motion, type AnimationProps } from 'framer-motion';

export default function DarkBoard(props: AnimationProps) {
  return (
    <motion.svg
      width="150"
      height="220"
      viewBox="0 0 150 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...fadeInOut}
      {...props}
    >
      <path
        d="M8.45748 1.01778L142.321 9.19833C146.33 9.44333 149.435 12.8033 149.362 16.8192L145.976 205.186C145.905 209.129 142.792 212.344 138.852 212.541L8.37538 219.08C4.0912 219.294 0.5 215.879 0.5 211.589V8.50382C0.5 4.18177 4.14347 0.754145 8.45748 1.01778Z"
        fill="#292929"
        stroke="url(#paint0_linear_63_73)"
      />
      <mask id="mask0_63_73" maskUnits="userSpaceOnUse" x="0" y="0" width="150" height="220">
        <path
          d="M8.45748 1.01778L142.321 9.19833C146.33 9.44333 149.435 12.8033 149.362 16.8192L145.976 205.186C145.905 209.129 142.792 212.344 138.852 212.541L8.37538 219.08C4.0912 219.294 0.5 215.879 0.5 211.589V8.50382C0.5 4.18177 4.14347 0.754145 8.45748 1.01778Z"
          fill="#F6F8FD"
          stroke="url(#paint1_linear_63_73)"
        />
      </mask>
      <g mask="url(#mask0_63_73)">
        <g filter="url(#filter0_f_63_73)">
          <path
            d="M78.5014 16.5C84.9014 5.70002 72.1681 -3.99998 65.0014 -7.49998C66.1676 -8.16665 67.8003 -11.2 65.0014 -18C61.5028 -26.5 50 -15.5 20 -21.5C-10 -27.5 -7.49861 -7.49998 -30.4986 5.00002C-53.4986 17.5 -33.9986 57.5 -32.9986 78.5C-31.9986 99.5 -24.9986 88.5 0.00138855 93.5C25.0014 98.5 31.5014 96 39.0014 70C46.5014 44 47.5014 61 61.5014 44.5C75.5014 28 70.5014 30 78.5014 16.5Z"
            fill="#464646"
          />
        </g>
        <g filter="url(#filter1_f_63_73)">
          <path
            d="M179.776 186.01C193.219 176.028 191.345 157.925 188.727 150.12C190.139 149.886 193.79 147.001 197.101 137.339C201.239 125.263 183.785 132.965 165.927 110.827C148.07 88.6887 134.008 114.271 106.68 118.113C79.3527 121.956 62.1702 180.288 46.1775 206.344C30.1847 232.401 44.2404 222.473 59.1214 240.921C74.0024 259.369 80.902 259.54 107.298 231.6C133.693 203.661 120.89 224.848 144.615 211.686C168.34 198.525 162.972 198.487 179.776 186.01Z"
            fill="#050505"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_63_73"
          x="-141.664"
          y="-122.597"
          width="321.911"
          height="318.195"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_63_73" />
        </filter>
        <filter
          id="filter1_f_63_73"
          x="-100.905"
          y="-38.0902"
          width="438.62"
          height="431.917"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur_63_73" />
        </filter>
        <linearGradient
          id="paint0_linear_63_73"
          x1="0"
          y1="220"
          x2="147.404"
          y2="140.524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#202020" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_63_73"
          x1="0"
          y1="220"
          x2="147.404"
          y2="140.524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9EDF5" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
