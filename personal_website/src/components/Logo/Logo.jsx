import React, { useState } from 'react';
import './Logo.css';

const svg = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 487.84'>
    <path d='M182.68 304.85c-7.81-10.75-13.81-23.09-17.46-36.69-.76-2.87-1.41-5.74-1.94-8.61l-39.23 4.55c-.39 9.45-2.97 18.95-7.92 27.75l-.36.68c-8.56 14.83-22.33 24.79-37.66 28.9-15.09 4.04-31.73 2.4-46.42-5.86l-.67-.36c-14.83-8.56-24.8-22.33-28.9-37.66-4.05-15.1-2.4-31.73 5.86-46.42l.35-.67c8.57-14.83 22.34-24.8 37.67-28.91 15.09-4.04 31.73-2.39 46.42 5.87l.67.35c13.6 7.86 23.1 20.09 27.76 33.89l40.49-4.71h.09c.41-19.03 5.7-37.37 14.97-53.43v-.05c5.75-9.95 13.03-19.03 21.61-26.84l-24.07-36.02a63.118 63.118 0 0 1-18.15 5.17l-.06.01c-17.25 2.22-33.8-2.75-46.58-12.61-12.79-9.85-21.83-24.6-24.08-41.92v-.06c-2.23-17.26 2.74-33.8 12.6-46.59C107.52 11.82 122.28 2.78 139.6.53c17.28-2.24 33.84 2.74 46.64 12.6 12.79 9.85 21.83 24.61 24.08 41.93 2.24 17.28-2.73 33.84-12.6 46.65-.82 1.07-1.68 2.11-2.57 3.13l24.38 36.48c7.62-4.16 15.86-7.49 24.62-9.84 28-7.5 56.4-3.63 80.29 8.79l12.54-18.39c-8.83-9.75-14.65-22.37-15.81-36.48l-.01-.04c-1.39-17.04 4.25-33.06 14.51-45.17 10.28-12.13 25.17-20.34 42.23-21.75 17.06-1.41 33.09 4.24 45.21 14.51 12.13 10.27 20.34 25.16 21.75 42.23 1.41 17.05-4.24 33.08-14.5 45.21-10.28 12.12-25.17 20.33-42.23 21.74l-.06.01c-10.47.85-20.57-.95-29.6-4.86l-12.18 17.85c16.23 14.09 28.57 32.99 34.54 55.28 4.86 18.1 4.95 36.38 1.05 53.5l14.09 5.12c.37-.58.76-1.14 1.15-1.7 9.29-13.24 23.63-22.93 40.81-25.93 17.17-3 33.95 1.25 47.19 10.55 13.23 9.29 22.92 23.63 25.92 40.8 3.01 17.17-1.24 33.95-10.54 47.2-9.29 13.23-23.63 22.92-40.81 25.92-17.17 3.01-33.95-1.25-47.19-10.54-13.23-9.29-22.92-23.63-25.93-40.81a63.023 63.023 0 0 1-.16-20.86l-13.39-4.88c-.52 1.04-1.04 2.07-1.59 3.09-18.8 35.16-58.7 61.31-98.98 61.31-1.82 0-3.63-.05-5.43-.14l-2.42 15.43c12.16 5.02 22.82 13.94 29.93 26.19 8.59 14.82 10.37 31.71 6.29 47.03-4.08 15.36-14.02 29.17-28.84 37.76l-.13.08c-14.78 8.52-31.62 10.28-46.9 6.22-15.36-4.08-29.16-14.02-37.76-28.84l-.14-.25c-8.47-14.76-10.2-31.55-6.15-46.79 4.08-15.36 14.02-29.16 28.84-37.75l.14-.08a61.803 61.803 0 0 1 28.75-8.27l2.44-15.55c-21.95-7.15-44.85-24.71-58.39-43.37zm148.65-2.96c6.92-6.45 12.7-14 17.12-22.28 9.88-18.46 13.02-40.6 7.16-62.46-6.12-22.84-20.88-41.01-39.79-51.93-18.94-10.94-42.09-14.64-64.93-8.52-22.81 6.11-40.98 20.9-51.92 39.84l-.03-.01c-10.91 18.93-14.61 42.06-8.49 64.89 2.79 10.42 7.39 19.88 13.37 28.11 3.12 4.3 6.61 8.27 10.41 11.87 10.64-2.3 22.13-3.49 30.65-9.44.78-1.17 1.62-2.86 2.43-4.71 1.22-2.78 2.32-5.81 3.03-7.89-2.97-3.49-5.51-7.44-7.95-11.33l-8.04-12.79c-2.94-4.38-4.47-8.39-4.57-11.69-.05-1.54.22-2.95.79-4.18.6-1.3 1.52-2.37 2.77-3.21.58-.4 1.24-.73 1.95-.99-.53-6.95-.71-15.67-.38-23 .16-1.73.51-3.47.99-5.21 2.06-7.33 7.2-13.25 13.58-17.3 3.51-2.25 7.37-3.92 11.39-5.06 2.55-.73-2.18-8.88.45-9.17 12.79-1.32 33.44 10.35 42.35 20 4.47 4.83 7.28 11.23 7.89 19.71l-.5 20.87c2.23.68 3.66 2.09 4.24 4.38.63 2.54-.05 6.12-2.21 10.98-.04.08-.09.18-.14.26l-9.16 15.1c-3.37 5.54-6.79 11.11-11.25 15.49.4.58.82 1.16 1.21 1.75 1.81 2.66 3.65 5.33 5.98 7.7.09.08.16.17.2.24 6.89 4.87 20.23 7.33 31.4 9.98zm-288.94-5.16c9.51 5.3 20.3 6.34 30.11 3.71 9.97-2.67 18.93-9.15 24.49-18.79l.3-.49c5.3-9.51 6.34-20.3 3.71-30.11-2.67-9.97-9.15-18.93-18.79-24.49l-.49-.31c-9.51-5.3-20.3-6.33-30.11-3.71-9.97 2.68-18.93 9.16-24.49 18.8l-.31.49c-5.3 9.51-6.33 20.29-3.71 30.11 2.68 9.97 9.16 18.92 18.8 24.49l.49.3zM180.56 88.45c6.47-8.41 9.74-19.3 8.26-30.67-1.46-11.32-7.41-21-15.83-27.48-8.41-6.47-19.3-9.74-30.67-8.27-11.32 1.47-21 7.42-27.48 15.84a41.344 41.344 0 0 0-8.38 29.76c.12.56.2 1.14.23 1.73 1.64 10.97 7.5 20.33 15.72 26.66 8.18 6.3 18.72 9.56 29.76 8.37.56-.12 1.14-.2 1.73-.22 10.96-1.65 20.33-7.51 26.66-15.72zm302.18 239a41.37 41.37 0 0 0 6.89-30.96c-1.97-11.28-8.33-20.69-17-26.78a41.33 41.33 0 0 0-30.96-6.9c-11.28 1.98-20.69 8.33-26.79 17.01a41.326 41.326 0 0 0-6.89 30.96c1.97 11.28 8.33 20.69 17 26.78a41.33 41.33 0 0 0 30.96 6.9c11.28-1.97 20.7-8.33 26.79-17.01zm-277.1 117.98c.25.39.49.79.7 1.21 5.6 9.29 14.39 15.53 24.13 18.12 9.79 2.6 20.55 1.54 30.04-3.75.38-.26.78-.49 1.2-.69 9.29-5.61 15.53-14.4 18.12-24.15 2.66-9.99 1.51-20.99-4.08-30.63a40.153 40.153 0 0 0-24.5-18.73c-9.78-2.6-20.55-1.54-30.03 3.75-.39.26-.79.49-1.2.69-9.3 5.61-15.54 14.4-18.13 24.15-2.6 9.78-1.55 20.54 3.75 30.03zm208.15-339.07a40.209 40.209 0 0 0 9.4-29.4c-.92-11.11-6.24-20.79-14.1-27.44-7.87-6.66-18.29-10.33-29.41-9.41-11.1.92-20.78 6.24-27.44 14.1a40.222 40.222 0 0 0-9.43 29.04l.06.72c1 10.96 6.29 20.5 14.07 27.09a40.208 40.208 0 0 0 29.04 9.43l.72-.06c10.95-1 20.5-6.29 27.09-14.07z' />
  </svg>
);
export const Logo = ({ theme, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const logoStyle = {
    color:
      theme === 'light' ? `var(--main-color-dark)` : `var(--main-color-light)`,
    backgroundColor:
      theme === 'light' ? `var(--main-color-light)` : `var(--main-color-dark)`,
    boxShadow:
      theme === 'light'
        ? `var(--${color}-mononochrome-medium) 10px 10px`
        : `var(--${color}-mononochrome-medium-dark) 10px 10px`,
    border:
      theme === 'light'
        ? `5px solid var(--${color}-mononochrome-dark)`
        : `5px solid var(--${color}-mononochrome-light)`,

    transition: 'color 0.1s ease, backgroundColor 0.1s ease',
  };
  const svgStyle = {
    fill:
      theme === 'light'
        ? `var(--${color}-mononochrome-medium)`
        : `var(--${color}-mononochrome-medium-light)`,
  };

  const hoverStyle = isHovered
    ? {
        color:
          theme === 'light'
            ? `var(--main-color-light)`
            : `var(--main-color-dark)`,
        backgroundColor:
          theme === 'light'
            ? `var(--main-color-dark)`
            : `var(--main-color-light)`,
      }
    : {};

  return (
    <div
      className='logo'
      style={{ ...logoStyle, ...hoverStyle }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className='logo-image-title-container'>
        <div className='logo-image'>
          {React.cloneElement(svg, { style: svgStyle })}
        </div>
        <div className='logo-title'>CT</div>
      </div>
      <div className='logo-description'>Personal Blog</div>
    </div>
  );
};
