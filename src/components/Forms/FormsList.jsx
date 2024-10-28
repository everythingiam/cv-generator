import AccordionItem from './AccordionItem';
import GeneralInfo from './GeneralInfo';
import ItemsList from './ItemsList';

const sectionLabels = {
  education: {
    count: 'Education ',
    sectionName: 'education',
    button: 'education',
    title: 'Name of the institution or course',
    position: 'Degree',
    start: 'Start year of study',
    end: 'End year of study',
    description: 'Description',
  },
  experience: {
    count: 'Work Experience ',
    sectionName: 'experience',
    button: 'experience',
    title: 'Company name',
    position: 'Position',
    start: 'Start date of employment',
    end: 'End date of employment',
    description: 'Description',
  },
  achieves: {
    count: 'Achievement ',
    sectionName: 'achieves',
    button: 'achieve',
    title: 'Achievement name',
    start: 'Year of achievement',
    description: 'Description',
  },
  projects: {
    count: 'Project ',
    sectionName: 'projects',
    button: 'project',
    title: 'Project name',
    position: 'Project field',
    start: 'Year of development',
    description: 'Description',
    link: 'Link'
  },
  additionally: {
    count: 'Addendum',
    sectionName: 'additionally',
    button: 'addendum',
    title: 'Addendum name',
    description: 'Сontent',
  },
};


const FormsList = ({ handleForm, data }) => {
  return (
    <ul className="accordion">
      <AccordionItem title="General Information">
        <GeneralInfo handleForm={handleForm} data={data.generalInfo} />
      </AccordionItem>
      
      <AccordionItem title="Education">
        <ItemsList labels={sectionLabels.education} handleForm={handleForm} data={data.education} />
      </AccordionItem>

      <AccordionItem title="Work Experience">
        <ItemsList labels={sectionLabels.experience} handleForm={handleForm} data={data.experience} />
      </AccordionItem>

      <AccordionItem title="Projects">
        <ItemsList labels={sectionLabels.projects} handleForm={handleForm} data={data.projects} />
      </AccordionItem>

      <AccordionItem title="Achievements">
        <ItemsList labels={sectionLabels.achieves} handleForm={handleForm} data={data.achieves} />
      </AccordionItem>

      <AccordionItem title="Additionally">
      <ItemsList labels={sectionLabels.additionally} handleForm={handleForm} data={data.additionally} />
      </AccordionItem>
    </ul>
  );
};

export default FormsList;
