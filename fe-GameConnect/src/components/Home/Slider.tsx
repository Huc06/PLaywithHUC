import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Slider.module.css";

type SliderProps = {
  images: string[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const reloadSlider = (index: number) => {
    setActive(index);
    if (sliderRef.current) {
      sliderRef.current.style.left = `-${
        sliderRef.current.children[index].getBoundingClientRect().width * index
      }px`;
    }
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1 < images.length ? prev + 1 : 0));
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => handleNext(), 3000);
  };

  useEffect(() => {
    reloadSlider(active);
    resetInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active]);

  return (
    <div className={styles.slider}>
      <div className={styles.list} ref={sliderRef}>
        {images.map((src, index) => (
          <div key={index} className={styles.item}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <ul className={styles.dots}>
        {images.map((_, index) => (
          <li
            key={index}
            className={index === active ? styles.active : ""}
            onClick={() => setActive(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Slider;
