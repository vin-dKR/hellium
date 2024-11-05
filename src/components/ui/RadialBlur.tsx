import React from 'react';

interface RadialBlurProps {
  color: string;
  size: string;
  blur: string;
  position: React.CSSProperties;
}

const RadialBlur: React.FC<RadialBlurProps> = ({
  color,
  size,
  blur,
  position,
}) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: color,
    filter: `blur(${blur})`,
    ...position,
  };

  return <div className='z-[-2]' style={styles} />;
};

export default RadialBlur;
