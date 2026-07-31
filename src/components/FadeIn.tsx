import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { ComponentType, ElementType, ReactNode } from 'react';
import type { MotionProps } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  duration?: number;
  /** Horizontal offset the element travels from. */
  x?: number;
  /** Vertical offset the element travels from. */
  y?: number;
  className?: string;
  /** Element type to render — anything motion.create() accepts. */
  as?: ElementType;
}

type MotionTag = ComponentType<MotionProps & { className?: string }>;

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
}: FadeInProps) {
  const Component = useMemo(
    () => motion.create(as) as unknown as MotionTag,
    [as]
  );

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}
