import React from 'react';

interface TorchBlurProps {
  blur: string;
  position: React.CSSProperties;
  background?: React.CSSProperties;
  backgroundSize?: React.CSSProperties;
}

const TorchBlur: React.FC<TorchBlurProps> = ({
  blur,
  position,
  background,
  backgroundSize,
}) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    filter: `blur(${blur})`,
    background:
      'radial-gradient(ellipse at center, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 0.5) 80%)',
    backgroundSize: '150% 100%',
    ...position,
    ...background,
    ...backgroundSize,
  };

  return (
    <div
      className='absolute top-2/3 left-1 w-5/12 h-28 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2 z-[-1] scale-x-150 scale-y-75 rotate-[-30deg]'
      style={styles}
    />
  );
};

export default TorchBlur;
