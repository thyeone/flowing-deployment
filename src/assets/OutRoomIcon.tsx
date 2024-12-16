export default function OutRoomIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 8V4C16 3.44772 15.5523 3 15 3H4C3.44772 3 3 3.44772 3 4V17C3 19.2091 4.79086 21 7 21H15C15.5523 21 16 20.5523 16 20V16"
        stroke="#212123"
        strokeWidth="1.5"
      />
      <path d="M10 12H21" stroke="#212123" strokeWidth="1.5" />
      <path
        d="M18.25 9L21.25 12L18.25 15"
        stroke="#212123"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
