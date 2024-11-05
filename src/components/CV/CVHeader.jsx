import { CSSTransition } from 'react-transition-group';

export default function CVHeader({ data}) {
  const isImage = data.image !== '' && data.image;
  const headerStyle = !isImage ? { marginBottom: '4rem' } : {};

  const isFull = data.name || data.description || data.image || data.contact;

  const getValidURL = (url) => {
    return url.startsWith('http://') || url.startsWith('https://')
      ? url
      : `https://${url}`;
  };

  return (
    <CSSTransition in={isFull} timeout={100} classNames="fade" unmountOnExit>
      <header style={headerStyle}>
        <div className="left">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <a href={getValidURL(data.contact)}>{data.contact}</a>
        </div>
        <CSSTransition
          in={isImage}
          timeout={250}
          classNames="fade"
          unmountOnExit
        >
          <img src={data.image} alt="Profile" />
        </CSSTransition>
      </header>
    </CSSTransition>
  );
}
