import { useState, useEffect } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const element = document.getElementById('scroll-trigger');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, hasAnimated]);

    return { isVisible, hasAnimated };
};

export default useScrollAnimation;
