import CVItem from './CVItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function CVItemsList({ title, data }) {
  const isFull = data.length > 0;

  return (
    <CSSTransition
      in={isFull}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <section>
        <h2>{title}</h2>
        <TransitionGroup component="ul">
          {data.map((item) => (
            <CSSTransition
              key={item.id}
              timeout={200}
              classNames="fade"
              unmountOnExit
            >
              <CVItem data={item} topic={title} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>
    </CSSTransition>
  );
}
