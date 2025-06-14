import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    aria-label="Rana Instrument Logo"
    role="img"
    {...props}
  >
    <rect width="200" height="50" fill="transparent" />
    <text
      x="10"
      y="35"
      fontFamily="Inter, sans-serif"
      fontSize="28"
      fontWeight="bold"
      fill="currentColor"
      className="text-primary group-hover:text-primary-foreground"
    >
      RANA
    </text>
    <text
      x="100"
      y="35"
      fontFamily="Inter, sans-serif"
      fontSize="28"
      fill="currentColor"
      className="text-accent"
    >
      INST.
    </text>
  </svg>
);

export default Logo;
