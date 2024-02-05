import { fadeInOut } from '@/constants/motions';
import { motion, type AnimationProps } from 'framer-motion';

export default function PinkBoard(props: AnimationProps) {
  return (
    <motion.svg
      width="124"
      height="180"
      viewBox="0 0 124 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      {...fadeInOut}
    >
      <path
        d="M8.4528 1.01217L116.315 7.53609C120.326 7.77872 123.434 11.1404 123.361 15.1586L120.611 166.516C120.54 170.461 117.425 173.676 113.484 173.871L8.37152 179.084C4.08875 179.297 0.5 175.881 0.5 171.593V8.49849C0.5 4.17829 4.14048 0.751346 8.4528 1.01217Z"
        fill="#F7F5FF"
        stroke="url(#paint0_linear_92_57)"
      />
      <mask id="mask0_92_57" maskUnits="userSpaceOnUse" x="0" y="0" width="124" height="180">
        <path
          d="M8.75184 1.01476L116.024 7.53404C120.034 7.77777 123.14 11.1386 123.067 15.1558L120.331 166.518C120.26 170.462 117.146 173.676 113.206 173.873L8.67017 179.082C4.38674 179.296 0.796875 175.88 0.796875 171.591V8.50095C0.796875 4.17989 4.43874 0.752638 8.75184 1.01476Z"
          fill="#F6F8FD"
          stroke="url(#paint1_linear_92_57)"
        />
      </mask>
      <g mask="url(#mask0_92_57)">
        <g filter="url(#filter0_f_92_57)">
          <path
            d="M64.8829 13.5001C70.1484 4.66375 59.6723 -3.27262 53.7761 -6.13625C54.7356 -6.68171 56.0788 -9.16354 53.7761 -14.7272C50.8977 -21.6817 41.4341 -12.6817 16.7522 -17.5908C-7.92958 -22.4999 -5.87162 -6.13625 -24.7943 4.09102C-43.7171 14.3183 -27.6739 47.0456 -26.8512 64.2274C-26.0284 81.4092 -20.2693 72.4092 0.298832 76.5001C20.867 80.591 26.2147 78.5456 32.3852 57.2728C38.5556 36.0001 39.3784 49.9092 50.8966 36.4092C62.4147 22.9092 58.3011 24.5456 64.8829 13.5001Z"
            fill="#EEE8FF"
          />
        </g>
        <g filter="url(#filter1_f_92_57)">
          <path
            d="M148.202 152.19C159.262 144.023 157.72 129.211 155.566 122.826C156.728 122.634 159.732 120.273 162.456 112.369C165.86 102.488 151.5 108.789 136.809 90.6765C122.117 72.5637 110.548 93.4942 88.0646 96.6381C65.5813 99.782 51.4448 147.508 38.2871 168.827C25.1295 190.146 36.6935 182.023 48.9365 197.117C61.1795 212.211 66.856 212.351 88.5723 189.491C110.289 166.632 99.7554 183.967 119.275 173.198C138.794 162.429 134.377 162.398 148.202 152.19Z"
            fill="#D2C7FF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_92_57"
          x="-133.98"
          y="-118.488"
          width="300.299"
          height="296.705"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_92_57" />
        </filter>
        <filter
          id="filter1_f_92_57"
          x="-107.539"
          y="-56.6191"
          width="410.501"
          height="404.296"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur_92_57" />
        </filter>
        <linearGradient
          id="paint0_linear_92_57"
          x1="0"
          y1="180"
          x2="121.284"
          y2="113.928"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AFA6FF" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_92_57"
          x1="0.296875"
          y1="180"
          x2="121.266"
          y2="114.414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9EDF5" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
