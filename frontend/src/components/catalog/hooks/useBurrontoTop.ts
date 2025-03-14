import { useEffect, useRef, useState } from "react";

export function useButtonToTop() {
  //работа с кнопкой "наверх"
  const catalogRef = useRef<HTMLDivElement>(null);
  const [visualButton, setVisualButton] = useState(false);

  ///определение в какой момент высвечивать кнопку
  useEffect(() => {
    const options: IntersectionObserverInit = {
      rootMargin: "0px 0px -650px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisualButton(true);
        } else {
          setVisualButton(false);
        }
      });
    }, options);

    setTimeout(() => observer.observe(catalogRef.current!), 1000);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { visualButton, catalogRef };
}