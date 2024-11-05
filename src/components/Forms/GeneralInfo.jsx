import { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function GeneralInfo({ handleForm, data }) {
  const [name, setName] = useState(data.name || '');
  const [description, setDescription] = useState(data.description || '');
  const [image, setImage] = useState(data.image || '');
  const [contact, setContact] = useState(data.contact || '');
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [error, setError] = useState('');
  
  useEffect(() => {
    setName(data.name || '');
    setDescription(data.description || '');
    setImage(data.image || '');
    setContact(data.contact || '');
  }, [data]);

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    handleForm('generalInfo', { name: newName, description, image, contact });
  };

  const handleDescription = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    handleForm('generalInfo', { name, description: newDescription, image, contact });
  };

  const handleContact = (e) => {
    const newContact = e.target.value;
    setContact(newContact);
    handleForm('generalInfo', { name, description, image, contact: newContact });
  };

  const deleteImage = () => {
    setImage('');
    handleForm('generalInfo', { name, description, image: '', contact });
    setFileInputKey(Date.now());
    setError(''); 
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/webp',
      ];
      
      const sizeLimit = 8 * 1024 * 1024; 

      if (allowedTypes.includes(file.type)) {
        if (file.size > sizeLimit) {
          setError('The photo is too large. Please upload a smaller image.');
          return; 
        }

        const reader = new FileReader();
        reader.onload = () => {
          const imageData = reader.result;
          setImage(imageData);
          handleForm('generalInfo', { name, description, image: imageData, contact });
          setError(''); 
        };
        reader.readAsDataURL(file);
      } else {
        alert(
          'Invalid file format. Please upload a PNG, JPG, JPEG, or WEBP image.'
        );
      }
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [error]);

  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <ul className="fields">
        <li className="text">
          <label htmlFor="name">Name and surname</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
            className={name !== '' ? 'filled' : ''}
          />
        </li>
        <li className="text">
          <label htmlFor="descr">Brief description</label>
          <input
            type="text"
            name="descr"
            id="descr"
            value={description}
            className={description !== '' ? 'filled' : ''}
            onChange={handleDescription}
          />
        </li>
        <li className="text">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={contact}
            className={contact !== '' ? 'filled' : ''}
            onChange={handleContact}
          />
        </li>
        <li className="text row">
          <div className="text">
            <label htmlFor="photo">Photo</label>
            <input
              key={fileInputKey}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              onChange={handleImageUpload}
              className={image !== '' ? 'filled' : ''}
            />
          </div>
          <button
            type="button"
            className="grey"
            disabled={!image}
            onClick={deleteImage}
          >
            {image !== '' ? (
              <FiTrash2 color={'#e63131'} size={24} />
            ) : (
              <FiTrash2 color={'gray'} size={24} />
            )}
          </button>
        </li>
      </ul>
      {error && <p className="error-message">{error}</p>} 
    </form>
  );
}
