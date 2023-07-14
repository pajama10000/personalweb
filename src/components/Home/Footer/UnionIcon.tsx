import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 0H8V4H4H0V8V12V16H4H8V12H12H16V8V4V0H12ZM4 12H8V8H12V4H8V8H4V12Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
