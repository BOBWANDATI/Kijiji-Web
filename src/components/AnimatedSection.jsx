import React from 'react';
import { useScrollAnimation } from '../components/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in-section', 
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  as: Component = 'section',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold, rootMargin });

  const animationClass = isVisible ? 'is-visible' : '';
  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <Component
      ref={ref}
      className={`${animation} ${animationClass} ${delayClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;