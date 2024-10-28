import { Fragment, useEffect, useState } from 'react';

export default function CVItem({ data, topic }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    data.title && (
      <li className={`big-item ${isVisible && 'visible'}`}>
        {topic === 'Projects' ? (
          <a className="title" target="_blank" href={data.link}>
            <h3>{data.title}</h3>
            {data.position && (
              <>
                <span>/</span>
                <h3 className="position">{data.position}</h3>
              </>
            )}
            <span style={{ marginTop: '-1px' }}>→</span>
          </a>
        ) : (
          <div className="title">
            <h3
              className={
                (topic === 'Achievements' || topic === 'Additionally') &&
                'small'
              }
            >
              {data.title}
            </h3>
            {data.position && (
              <>
                <span>/</span>
                <h3 className="position">{data.position}</h3>
              </>
            )}
          </div>
        )}
        {data.start && (
          <p className="date">
            {data.end ? `${data.start} – ${data.end}` : data.start}
          </p>
        )}
        <p className="description">
          {data.description.split('\n').map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      </li>
    )
  );
}
