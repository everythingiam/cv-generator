import AccordionItem from './AccordionItem';
import GeneralInfo from './GeneralInfo';
import ItemsList from './ItemsList';

const FormsList = ({ handleForm, data }) => {
  return (
    <ul className="accordion">
      <AccordionItem title="General Information">
        <GeneralInfo handleForm={handleForm} data={data.generalInfo} />
      </AccordionItem>
      
      <AccordionItem title="Education">
        <ItemsList handleForm={handleForm} data={data.education} />
      </AccordionItem>

      <AccordionItem title="Work Experience">
        <ItemsList handleForm={handleForm} data={data.experience} />
      </AccordionItem>

      <AccordionItem title="Projects">
        <ItemsList handleForm={handleForm} data={data.projects} />
      </AccordionItem>

      <AccordionItem title="Achievements">
        <ItemsList handleForm={handleForm} data={data.achieves} />
      </AccordionItem>

      <AccordionItem title="Additionally">
      <ItemsList handleForm={handleForm} data={data.additionally} />
      </AccordionItem>
    </ul>
  );
};

export default FormsList;
