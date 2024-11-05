import '../../styles/CV.scss';
import CVHeader from './CVHeader';
import CVMain from './CVMain';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';

export default function CV({ data, reference }) {
  const isFull =
    data.generalInfo?.name ||
    data.generalInfo?.description ||
    data.generalInfo?.image ||
    data.education.length > 0 ||
    data.experience.length > 0 ||
    data.achieves.length > 0 ||
    data.projects.length > 0 ||
    data.additionally.length > 0;

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(prevState => !prevState); 
  };

  return (
    <>
      <button className="show" onClick={handleClick}>
        <FiEye className="icon" />
        {isVisible ? 'Hide CV' : 'Show CV'}
      </button>

      <div className={`cv-cont ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="cv" ref={reference}>
          {!isFull && (
            <div className="startCV">Start filling your CV with forms!</div>
          )}

          <CVHeader data={data.generalInfo} />
          <CVMain data={data} />
        </div>
      </div>
    </>
  );
}
