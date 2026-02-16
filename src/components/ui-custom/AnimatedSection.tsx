import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 100,
  threshold = 0.1,
}: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
            style={{
              animationDelay: `${index * staggerDelay}ms`,
            }}
          >
            {child}
          </div>
        ))
      ) : (
        <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          {children}
        </div>
      )}
    </div>
  );
}
