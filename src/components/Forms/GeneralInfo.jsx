import { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function GeneralInfo({ handleForm, data }) {
  const [name, setName] = useState(data.name || '');
  const [description, setDescription] = useState(data.description || '');
  const [image, setImage] = useState(data.image || '');
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  useEffect(() => {
    setName(data.name || '');
    setDescription(data.description || '');
    setImage(data.image || '');
  }, [data]);

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    handleForm('generalInfo', { name: newName, description, image });
  };

  const handleDescription = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    handleForm('generalInfo', { name, description: newDescription, image });
  };

  const deleteImage = () => {
    setImage('');
    handleForm('generalInfo', { name, description, image: '' });
    setFileInputKey(Date.now());
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
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageData = reader.result;
          setImage(imageData);
          handleForm('generalInfo', { name, description, image: imageData });
        };
        reader.readAsDataURL(file);
      } else {
        alert(
          'Invalid file format. Please upload a PNG, JPG, JPEG, or WEBP image.'
        );
      }
    }
  };

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
    </form>
  );
}
