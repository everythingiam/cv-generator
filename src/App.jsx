import { useState, useEffect } from 'react';
import './styles/App.scss';
import CV from './components/CV/CV';
import FormSection from './components/Forms/FormSection';
import autoData from './components/autoData';

function App() {
  const emptyStructure = {
    generalInfo: {
      name: '',
      description: '',
      image: '',
    },
    education: [],
    experience: [],
    achieves: [],
    projects: [],
    additionally: [],
  };

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    const parsedData = savedData ? JSON.parse(savedData) : emptyStructure;
  
    return {
      ...emptyStructure,
      ...parsedData,
    };
  });

  const handleForm = (section, updatedSectionData) => {
    setData((prev) => {
      if (section === 'generalInfo' || Array.isArray(updatedSectionData)) {
        return { ...prev, [section]: updatedSectionData };
      }

      const existingIndex = prev[section].findIndex(
        (item) => item.id === updatedSectionData.id
      );

      if (existingIndex !== -1) {
        const updatedSection = [...prev[section]];
        updatedSection[existingIndex] = updatedSectionData;
        return { ...prev, [section]: updatedSection };
      }

      return { ...prev, [section]: [...prev[section], updatedSectionData] };
    });
  };
  
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    console.log('Данные - ', data);
  }, [data])
  const clearCV = () => {
    setData(emptyStructure);
  };

  const autoFill = () => {
    setData(autoData);
  };

  return (
    <>
      <FormSection
        handleForm={handleForm}
        data={data}
        clearCV={clearCV}
        autoFill={autoFill}
      />
      <CV data={data} />
    </>
  );
}

export default App;
