import { memo, SVGProps } from 'react';

const Line10StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 191' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.499995 191L0.500004 0L1.5 4.37114e-08L1.5 191L0.499995 191Z'
      fill='#ABB2BF'
    />
  </svg>
);
const Memo = memo(Line10StrokeIcon);
export { Memo as Line10StrokeIcon };
