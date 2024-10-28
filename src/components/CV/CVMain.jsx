import CVItemsList from './CVItemsList';

export default function CVMain({data}) {
  const isEmpty = !(
    data.generalInfo?.name ||
    data.generalInfo?.description ||
    data.generalInfo?.image ||
    data.education.length > 0 ||
    data.experience.length > 0 ||
    data.achieves.length > 0 ||
    data.projects.length > 0 ||
    data.additionally.length > 0
  );

  return (
    <main>
      {isEmpty && (
        <div className='startCV'>Start filling your CV with forms!</div>
      )}

      <div className="left">
        <CVItemsList title="Education" data={data.education} />
        <CVItemsList title="Achievements" data={data.achieves} />
        <CVItemsList title="Additionally" data={data.additionally} />
      </div>
      <div className="right">
        <CVItemsList title="Work experience" data={data.experience} />
        <CVItemsList title="Projects" data={data.projects} />
      </div>
    </main>
  );
}
