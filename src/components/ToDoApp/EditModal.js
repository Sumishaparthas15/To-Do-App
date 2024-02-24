import React from 'react';

const EditModal = ({ editedTitle, handleChange, handleSave }) => {
  const handleSaveWithoutToggle = () => {
    handleSave();
  
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <input type="text" value={editedTitle} onChange={handleChange} />
        <button onClick={handleSaveWithoutToggle} className='save_button'>Save</button>
        
      </div>
    </div>
  );
};

export default EditModal;
