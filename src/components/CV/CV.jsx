import '../../styles/CV.scss';
import CVHeader from './CVHeader';
import CVMain from './CVMain';

export default function CV({data}){
  return (
    <div className="cv-cont">
      <div className="cv">
        <CVHeader data={data.generalInfo}/>
        <CVMain data={data}/>
      </div>
    </div>
  )
}