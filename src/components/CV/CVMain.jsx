import CVItemsList from './CVItemsList';

export default function CVMain({ data }) {
  return (
    <main>
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
