import { useEffect, useState } from 'react';

export default function CVHeader({ data }) {
  const isImage = data.image !== '' && data.image;
  const headerStyle = !isImage ? { marginBottom: '4rem' } : {};
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header style={headerStyle} className={isVisible && 'visible'}>
      <div className="left">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
      {isImage && <img src={data.image} alt="Profile" />}
    </header>
  );
}
