import { Children, useState } from 'react';
import styles from './Carousel.module.css';

const ChevronLeft = ({ size = 20, color = '#000' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M15 18l-6-6 6-6' />
  </svg>
);

const ChevronRight = ({ size = 20, color = '#000' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M9 18l6-6-6-6' />
  </svg>
);

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const handleLeft = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleRight = () => {
    if (current < Children.count(children) - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.carouselContent}>
      {children[current]}
      <div>
        {current > 0 && (
          <button
            className={styles.carouselLeftArrow}
            onClick={() => handleLeft()}
          >
            <ChevronLeft />
          </button>
        )}
        {current < Children.count(children) - 1 && (
          <button
            className={styles.carouselRightArrow}
            onClick={() => handleRight()}
          >
            <ChevronRight />
          </button>
        )}
      </div>
      <div className={styles.carouselDots}>
        {children.map((i, index) => (
          <span
            key={index}
            className={current === index ? styles.active : ''}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
