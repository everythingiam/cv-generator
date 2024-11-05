import CVItemsList from './CVItemsList';

export default function CVMain({ data }) {
  return (
    <main>
      <div className="left">
        <CVItemsList title="Education" data={data.education.data} />
        <CVItemsList title="Achievements" data={data.achieves.data} />
        <CVItemsList title="Additionally" data={data.additionally.data} />
      </div>
      <div className="right">
        <CVItemsList title="Work experience" data={data.experience.data} />
        <CVItemsList title="Projects" data={data.projects.data} />
      </div>
    </main>
  );
}
