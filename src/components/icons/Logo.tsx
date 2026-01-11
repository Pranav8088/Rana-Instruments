"use client";

import Image from 'next/image';
import type { FC } from 'react';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => (
  <div className={cn('relative w-[150px] h-[50px]', className)}>
    <Image
      src="/page%20banner/lOGO.png"
      alt="Rana Instruments Logo"
      fill
      priority
      className="object-contain"
      sizes="150px"
    />
    <span className="sr-only">Rana Instruments</span>
  </div>
);

export default Logo;
