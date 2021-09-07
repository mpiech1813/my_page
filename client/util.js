import { useState, useEffect } from 'react';

export default (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState(entry.isIntersecting);
                    observer.unobserve(element);
                }
            },
            {
                rootMargin,
            }
        );

        element && observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return isVisible;
};
