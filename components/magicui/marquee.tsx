import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  className?: string;
  reverse?: boolean; // Add the reverse prop
}

const Marquee: React.FC<MarqueeProps> = ({ children, pauseOnHover, className, reverse }) => {
  return (
    <div className={`${className} ${reverse ? 'reverse' : ''}`}>
      {children}
    </div>
  );
};

export default Marquee;
