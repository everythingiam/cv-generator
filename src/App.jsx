import { useState, useEffect, useRef } from 'react';
import './styles/App.scss';
import CV from './components/CV/CV';
import FormSection from './components/Forms/FormSection';
import autoData from './components/autoData';
import { useReactToPrint } from 'react-to-print';
import structure from './dataStructure';

function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    const parsedData = savedData ? JSON.parse(savedData) : structure;

    return {
      ...structure,
      ...parsedData,
    };
  });

  const handleForm = (section, updatedSectionData) => {
    setData((prev) => {
      
      if ( Array.isArray(updatedSectionData)) {
        return { ...prev, [section]: { ...prev[section], data: updatedSectionData } };
      }

      if (section === 'generalInfo'){
        return { ...prev, [section]: updatedSectionData };
      }
  
      const existingIndex = prev[section].data.findIndex(
        (item) => item.id === updatedSectionData.id
      );
  
      if (existingIndex !== -1) {
        const updatedData = [...prev[section].data];
        updatedData[existingIndex] = updatedSectionData;
        return { ...prev, [section]: { ...prev[section], data: updatedData } };
      }
  
      return { ...prev, [section]: { ...prev[section], data: [...prev[section].data, updatedSectionData] } };
    });

  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    console.log('Данные - ', data);
  }, [data]);
  const clearCV = () => {
    setData(structure);
  };

  const autoFill = () => {
    setData(autoData);
  };

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <>
      <FormSection
        handleForm={handleForm}
        data={data}
        clearCV={clearCV}
        autoFill={autoFill}
        handlePrint={reactToPrintFn}
      />
      <CV data={data} reference={contentRef}/>
    </>
  );
}

export default App;
