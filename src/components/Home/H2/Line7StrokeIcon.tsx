import { memo, SVGProps } from 'react';

const Line7StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 511 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M511 1.5H0V0.5H511V1.5Z' fill='#66B9E8' />
  </svg>
);
const Memo = memo(Line7StrokeIcon);
export { Memo as Line7StrokeIcon };
