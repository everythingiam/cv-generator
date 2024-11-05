import '../../styles/FormSection.scss';
import FormsList from './FormsList';
import { FiDownload, FiEdit3, FiDelete } from 'react-icons/fi';

export default function FormSection({
  handleForm,
  data,
  clearCV,
  autoFill,
  handlePrint,
}) {
  // const exportToPDF = () => {
  //   const element = document.querySelector('.cv');
  //   print();
  // }

  return (
    <div className="form-section">
      <article>
        <h1>
          Generate <br /> your perfect CV
        </h1>
        <p>Fill the forms below. Your CV will be dynamically updated.</p>
        <div className="buttons">
          <button className="add section" onClick={handlePrint}>
            <FiDownload color="white" className="icon" />
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

      <a href="https://github.com/everythingiam/cv-generator" target="_blank">
        Watch on Github <span style={{ marginTop: '-1px' }}>→</span>
      </a>
    </div>
  );
}
