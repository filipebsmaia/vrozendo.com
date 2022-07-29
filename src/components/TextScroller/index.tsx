import React, {
  useEffect, useRef, useState
} from 'react';

import { ScrolableText } from './styles';

interface ITextScrollerProps {
  className?: string;
  qualities: string[];
}

const TextScroller = ({ className, qualities }: ITextScrollerProps): JSX.Element => {
  const [boxSize, setBoxSize] = useState(0);
  const parentRef = useRef<HTMLSpanElement>(null);
  const childrenRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (parentRef.current) {
        count += 1;
        parentRef.current.style.top = `-${(1.6 * count)}em`;
        parentRef.current.style.top = `-${(1.6 * count)}em`;
        setBoxSize(childrenRefs.current[count].getBoundingClientRect().width);
        if (count === qualities.length - 1) {
          count = 0;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [qualities]);

  return (
    <ScrolableText className={className} borderSize={boxSize} size={qualities.length}>
      <span ref={parentRef}>
        {qualities.map((quality, i) => (
          <>
            <span
              ref={(r) => { childrenRefs.current[i] = r!; }}
              key={quality}
            >{quality}
            </span><br />
          </>
        ))}
      </span>
    </ScrolableText>
  );
};

export default TextScroller;
