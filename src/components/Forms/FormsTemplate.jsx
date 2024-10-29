import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/Forms.scss';
import { FiCheck } from 'react-icons/fi';

export default function FormsTemplate({
  handleForm,
  index,
  labels,
  deleteItem,
  itemData,
}) {
  const [title, setTitle] = useState(itemData.title || '');
  const [position, setPosition] = useState(itemData.position || '');
  const [start, setStart] = useState(itemData.start || '');
  const [end, setEnd] = useState(itemData.end || '');
  const [description, setDescription] = useState(itemData.description || '');
  const [link, setLink] = useState(itemData.link || '');

  const id = uuidv4();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(labels.sectionName, {
      id: itemData.id || uuidv4(),
      title,
      position,
      start,
      end,
      description,
      link,
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <header>
        <h3>
          {labels.count} {index + 1}
        </h3>
        <button type="reset" className="delete" onClick={() => deleteItem(id)}>
          Delete {labels.count} {index + 1}
        </button>
      </header>

      <ul className="fields">
        {labels.title && (
          <li className="text">
            <label htmlFor={`${labels.sectionName}${index}title`}>
              {labels.title}
            </label>
            <input
              type="text"
              name={`${labels.sectionName}${index}title`}
              id={`${labels.sectionName}${index}title`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={title !== '' && 'filled'}
              required
            />
          </li>
        )}

        {labels.position && (
          <li className="text">
            <label htmlFor={`${labels.sectionName}${index}position`}>
              {labels.position}
            </label>
            <input
              type="text"
              required
              name={`${labels.sectionName}${index}position`}
              id={`${labels.sectionName}${index}position`}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className={position !== '' && 'filled'}
            />
          </li>
        )}

        {(labels.start || labels.end) && (
          <li className="text row">
            {labels.start && (
              <div className="text">
                <label htmlFor={`${labels.sectionName}${index}start`}>
                  {labels.start}
                </label>
                <input
                  type="text"
                  required={labels.end}
                  placeholder={labels.end ? '' : 'Optional'}
                  name={`${labels.sectionName}${index}start`}
                  id={`${labels.sectionName}${index}start`}
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  className={start !== '' && 'filled'}
                />
              </div>
            )}
            {labels.end && (
              <div className="text">
                <label htmlFor={`${labels.sectionName}${index}end`}>
                  {labels.end}
                </label>
                <input
                  type="text"
                  name={`${labels.sectionName}${index}end`}
                  id={`${labels.sectionName}${index}end`}
                  value={end}
                  placeholder="Optional"
                  onChange={(e) => setEnd(e.target.value)}
                  className={end !== '' && 'filled'}
                />
              </div>
            )}
          </li>
        )}

        {labels.link && (
          <li className="text">
            <label htmlFor={`${labels.sectionName}${index}link`}>
              {labels.link}
            </label>
            <input
              name={`${labels.sectionName}${index}link`}
              id={`${labels.sectionName}${index}link`}
              value={link}
              placeholder="Optional"
              onChange={(e) => setLink(e.target.value)}
              className={link !== '' && 'filled'}
            />
          </li>
        )}

        {labels.description && (
          <li className="text">
            <label htmlFor={`${labels.sectionName}${index}description`}>
              {labels.description}
            </label>
            <textarea
              type="text"
              required
              name={`${labels.sectionName}${index}description`}
              id={`${labels.sectionName}${index}description`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={description !== '' && 'filled'}
            />
          </li>
        )}
      </ul>
      <button type="submit">
        <FiCheck className="icon" /> Submit {labels.button}
      </button>
      <div className="sep"></div>
    </form>
  );
}
