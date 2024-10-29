import '../../styles/CV.scss';
import CVHeader from './CVHeader';
import CVMain from './CVMain';
import { CSSTransition } from 'react-transition-group';

export default function CV({ data }) {
  const isFull =
    data.generalInfo?.name ||
    data.generalInfo?.description ||
    data.generalInfo?.image ||
    data.education.length > 0 ||
    data.experience.length > 0 ||
    data.achieves.length > 0 ||
    data.projects.length > 0 ||
    data.additionally.length > 0;
    
  return (
    <div className="cv-cont">
      <div className="cv">
        <CSSTransition
          in={!isFull}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="startCV">Start filling your CV with forms!</div>
        </CSSTransition>

        <CVHeader data={data.generalInfo} />
        <CVMain data={data} />
      </div>
    </div>
  );
}
