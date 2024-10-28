import FormsTemplate from './FormsTemplate';
import { v4 as uuidv4 } from 'uuid';
import { FiPlus } from 'react-icons/fi';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function ItemsList({ labels, handleForm, data }) {
  const addNewItem = () => {
    handleForm(labels.sectionName, { id: uuidv4() });
  };

  const deleteItem = (id) => {
    const newArray = data.filter((elem) => elem.id !== id);
    handleForm(labels.sectionName, newArray);
  };

  return (
    <>
      {data.map((item, index) => (
        <FormsTemplate
          key={item.id}
          handleForm={handleForm}
          index={index}
          labels={labels}
          deleteItem={() => deleteItem(item.id)}
          itemData={item}
        />
      ))}
      <button type="button" className="add" onClick={addNewItem}>
        <FiPlus className="icon" /> Add {labels.button}
      </button>
    </>
  );
}
