"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ScrollDirectionContextValue = {
  scrollDown: boolean;
};

const ScrollDirectionContext = createContext<ScrollDirectionContextValue>({
  scrollDown: true,
});

export function useScrollDirection() {
  return useContext(ScrollDirectionContext);
}

export function ScrollDirectionProvider({ children }: { children: ReactNode }) {
  const [scrollDown, setScrollDown] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) > 8) {
        setScrollDown(y > lastY.current);
        lastY.current = y;
      }
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <ScrollDirectionContext.Provider value={{ scrollDown }}>
      {children}
    </ScrollDirectionContext.Provider>
  );
}
