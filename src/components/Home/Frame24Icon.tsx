import { memo, SVGProps } from 'react';

const Frame24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 103 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2} cy={2.5} r={2} fill='#ABB2BF' />
    <circle cx={26.75} cy={2.5} r={2} fill='#ABB2BF' />
    <circle cx={51.5} cy={2.5} r={2} fill='#ABB2BF' />
    <circle cx={76.25} cy={2.5} r={2} fill='#ABB2BF' />
    <circle cx={101} cy={2.5} r={2} fill='#ABB2BF' />
  </svg>
);
const Memo = memo(Frame24Icon);
export { Memo as Frame24Icon };
