import '../../styles/FormSection.scss';
import FormsList from './FormsList';
import { FiDownload, FiEdit3, FiDelete } from 'react-icons/fi';

export default function FormSection({ handleForm, data, clearCV, autoFill }) {

  return (
    <div className="form-section">
      <article>
        <h1>
          Generate <br /> your perfect CV
        </h1>
        <p>Fill the forms below. Your CV will be dynamically updated.</p>
        <div className="buttons">
          <button className="add section">
            <FiDownload color="white" className='icon'/>
            PDF
          </button>
          <button className="delete section" onClick={() => clearCV()}>
            <FiDelete className="icon" />
            Clear CV
          </button>
          <button className="delete orange section" onClick={() => autoFill()}>
            <FiEdit3 className="icon" color="#f17a1f" />
            Autofill
          </button>
        </div>
      </article>
      <FormsList data={data} handleForm={handleForm} />
    </div>
  );
}