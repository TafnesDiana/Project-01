import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string; 
}

const ContainerComponent: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`content-center text-center  ${className}`}>
      {children}
    </div>
  );
};

export default ContainerComponent;
