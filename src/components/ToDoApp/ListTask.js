import React, { useState } from 'react';
import EditModal from './EditModal'; // Import the EditModal component

const ListTask = ({ task, index, removeTask, tasks }) => {
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [blurred, setBlurred] = useState(false); // State to track blurring effect

  const handleEdit = () => {
    setEditing(true);
    
    setShowModal(); // Shown the modal when edit is clicked
  };

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSave = () => {
    setEditing(false);
    setShowModal(false); // Close the modal after saving
    if (editedTitle.trim() !== "") {
      // Check if the edited title already exists in the list of tasks
      if (!tasks.some(existingTask => existingTask.title === editedTitle.trim())) {
        // If it doesn't exist, update the task title
        task.title = editedTitle;
      }
    }
  };

  const toggleCompleted = () => {
    // setCompleted();
    setBlurred(true); // Set blurred state to true when the task is marked as completed
  };

  return (
    <>
      <div
        className={`list_tasks ${completed ? 'completed' : ''}`}
        style={{ filter: blurred ? 'blur(2px)' : 'none' }} // Apply blur style conditionally
      >
        <span>{task.title}</span>
        <button onClick={() => { removeTask(index) }} className='delete_button'>Delete</button>
        <button onClick={handleEdit} className='edit_button'>Edit</button>
        <button onClick={toggleCompleted} className='mark_as_done_button'> ✔</button>
      </div>
      {/* Modal for editing */}
      {showModal && (
        <EditModal
          editedTitle={editedTitle}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      )}
    </>
  );
};

export default ListTask;
