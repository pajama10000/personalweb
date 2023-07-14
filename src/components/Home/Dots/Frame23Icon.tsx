import { memo, SVGProps } from 'react';

const Frame23Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 84 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2} cy={2} r={2} fill='#ABB2BF' />
    <circle cx={22} cy={2} r={2} fill='#ABB2BF' />
    <circle cx={42} cy={2} r={2} fill='#ABB2BF' />
    <circle cx={62} cy={2} r={2} fill='#ABB2BF' />
    <circle cx={82} cy={2} r={2} fill='#ABB2BF' />
  </svg>
);
const Memo = memo(Frame23Icon);
export { Memo as Frame23Icon };
