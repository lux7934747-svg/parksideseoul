
import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`min-h-screen relative overflow-hidden flex flex-col ${className}`}>
      {children}
    </section>
  );
};

export default Section;
