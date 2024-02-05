import { fadeInOut } from '@/constants/motions';
import { motion, type AnimationProps } from 'framer-motion';

export default function DarkBoard(props: AnimationProps) {
  return (
    <motion.svg
      width="123"
      height="180"
      viewBox="0 0 123 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...fadeInOut}
      {...props}
    >
      <path
        d="M0.5 8.50267C0.5 4.18101 4.14283 0.75354 8.45647 1.01657L115.32 7.53262C119.329 7.77711 122.434 11.1374 122.362 15.1538L119.635 166.518C119.564 170.462 116.45 173.677 112.51 173.874L8.37454 179.081C4.09066 179.295 0.5 175.879 0.5 171.59V8.50267Z"
        fill="#424245"
        stroke="url(#paint0_linear_633_5848)"
      />
      <mask id="mask0_633_5848" maskUnits="userSpaceOnUse" x="0" y="0" width="123" height="180">
        <path
          d="M0.5 8.50267C0.5 4.18101 4.14283 0.75354 8.45647 1.01657L115.32 7.53262C119.329 7.77711 122.434 11.1374 122.362 15.1538L119.635 166.518C119.564 170.462 116.45 173.677 112.51 173.874L8.37454 179.081C4.09066 179.295 0.5 175.879 0.5 171.59V8.50267Z"
          fill="#F6F8FD"
          stroke="url(#paint1_linear_633_5848)"
        />
      </mask>
      <g mask="url(#mask0_633_5848)">
        <g filter="url(#filter0_f_633_5848)">
          <path
            d="M64.3716 13.4999C69.6196 4.66356 59.1783 -3.2728 53.3016 -6.13644C54.2579 -6.6819 55.5967 -9.16372 53.3016 -14.7274C50.4328 -21.6819 41.0005 -12.6819 16.4005 -17.591C-8.19953 -22.5001 -6.14839 -6.13644 -25.0084 4.09084C-43.8684 14.3181 -27.8784 47.0454 -27.0584 64.2272C-26.2384 81.409 -20.4984 72.409 0.0016098 76.4999C20.5016 80.5908 25.8316 78.5454 31.9816 57.2727C38.1316 35.9999 38.9516 49.909 50.4316 36.409C61.9116 22.909 57.8116 24.5454 64.3716 13.4999Z"
            fill="#616164"
          />
        </g>
        <g filter="url(#filter1_f_633_5848)">
          <path
            d="M147.415 152.19C158.438 144.023 156.901 129.211 154.755 122.826C155.912 122.633 158.907 120.273 161.621 112.368C165.014 102.488 150.702 108.789 136.059 90.6762C121.416 72.5634 109.885 93.4939 87.4766 96.6378C65.0679 99.7817 50.9782 147.508 37.8642 168.827C24.7502 190.146 36.2758 182.023 48.4782 197.117C60.6807 212.211 66.3383 212.351 87.9826 189.491C109.627 166.631 99.1287 183.967 118.583 173.198C138.038 162.429 133.636 162.398 147.415 152.19Z"
            fill="#212123"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_633_5848"
          x="-134.164"
          y="-118.488"
          width="299.969"
          height="296.705"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_633_5848" />
        </filter>
        <filter
          id="filter1_f_633_5848"
          x="-107.941"
          y="-56.6191"
          width="410.066"
          height="404.295"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur_633_5848" />
        </filter>
        <linearGradient
          id="paint0_linear_633_5848"
          x1="0"
          y1="180"
          x2="120.75"
          y2="114.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#202020" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_633_5848"
          x1="0"
          y1="180"
          x2="120.75"
          y2="114.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9EDF5" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
