import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function SectionTitle({ title, subtitle, as = 'h2', className, ...props }: SectionTitleProps) {
  const Tag = as;
  return (
    <div className="mb-8 md:mb-12 text-center">
      <Tag
        className={cn(
          'font-headline font-bold tracking-tight text-black',
          {
            'text-4xl md:text-5xl': as === 'h1',
            'text-3xl md:text-4xl': as === 'h2',
            'text-2xl md:text-3xl': as === 'h3',
          },
          className
        )}
        {...props}
      >
        {title}
      </Tag>
      {subtitle && <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
