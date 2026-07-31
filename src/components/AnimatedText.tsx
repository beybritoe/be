import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function Char({ char, range, progress }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder holds the layout; the animated copy sits on top. */}
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={paragraphRef} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const wordStart = charIndex;
        charIndex += word.length + 1; // +1 for the space that follows

        return (
          <Fragment key={`${word}-${wordIndex}`}>
            <span className="inline-block">
              {word.split('').map((char, i) => {
                const index = wordStart + i;
                return (
                  <Char
                    key={`${char}-${index}`}
                    char={char}
                    range={[index / totalChars, (index + 1) / totalChars]}
                    progress={scrollYProgress}
                  />
                );
              })}
            </span>
            {/* Break opportunity sits outside the inline-block so words wrap. */}
            {wordIndex < words.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </p>
  );
}
