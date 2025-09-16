import { useState, useEffect, useRef, useCallback } from 'react';

export const useOptimizedScrollMenu = (showTopAt = 100, hideTopAt = 800, showBottomAt = 1000) => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const [showBottomMenu, setShowBottomMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // useRef cho performance
  const scrollTimeoutRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    requestRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Chỉ update khi thay đổi đáng kể
      if (Math.abs(currentScrollY - lastScrollYRef.current) > 5) {
        setScrollY(currentScrollY);
        lastScrollYRef.current = currentScrollY;

        // Update menu states
        const shouldShowTop = currentScrollY > showTopAt && currentScrollY < hideTopAt;
        const shouldShowBottom = currentScrollY > showBottomAt;
        
        setShowTopMenu(prev => prev !== shouldShowTop ? shouldShowTop : prev);
        setShowBottomMenu(prev => prev !== shouldShowBottom ? shouldShowBottom : prev);
      }
    });
  }, [showTopAt, hideTopAt, showBottomAt]);

  const throttledScroll = useCallback(() => {
    if (scrollTimeoutRef.current) return;
    
    scrollTimeoutRef.current = setTimeout(() => {
      handleScroll();
      scrollTimeoutRef.current = null;
    }, 16); // 60fps
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [throttledScroll]);

  return { showTopMenu, showBottomMenu, scrollY };
};