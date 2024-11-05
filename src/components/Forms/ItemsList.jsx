import FormsTemplate from './FormsTemplate';
import { v4 as uuidv4 } from 'uuid';
import { FiPlus } from 'react-icons/fi';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function ItemsList({ handleForm, data }) {
  const addNewItem = () => {
    handleForm(data.labels.sectionName, { id: uuidv4() });
  };

  const deleteItem = (id) => {
    const newArray = data.data.filter((elem) => elem.id !== id);
    handleForm(data.labels.sectionName, newArray);
  };

  return (
    <>
      <TransitionGroup>
        {data.data.map((item, index) => (
          <CSSTransition
          key={item.id}
          timeout={300}
          classNames={'fade'}
          unmountOnExit
          >
            <FormsTemplate
              handleForm={handleForm}
              index={index}
              deleteItem={() => deleteItem(item.id)}
              itemData={item}
              labels={data.labels}
            />
          </CSSTransition>
        ))}
        <button type="button" className="add" onClick={addNewItem}>
          <FiPlus className="icon" /> Add {data.labels.button}
        </button>
      </TransitionGroup>
    </>
  );
}
