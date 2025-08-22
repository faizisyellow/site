import { useCallback } from 'react';

const useSmoothScroll = (offset = 80) => {
  const scrollToElement = useCallback((elementId, customOffset = offset) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - customOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, [offset]);

  const handleSmoothClick = useCallback((elementId, customOffset = offset) => {
    return (e) => {
      e.preventDefault();
      scrollToElement(elementId, customOffset);
    };
  }, [scrollToElement, offset]);

  return { scrollToElement, handleSmoothClick };
};

export default useSmoothScroll;