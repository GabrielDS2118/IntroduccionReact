import React,{useState} from 'react';

import { Modal } from './Modal';
import TodoForm from './TodoForm';

import './CreateTodoButton.css';

const CreateTodoButton = () => {
  
  const [open,setOpen] = useState(false)

  return (
    <>
      <button className="CreateTodoButton" onClick={() => setOpen(!open)}>
        +
      </button>

      {open && (
        <Modal>
          <TodoForm setOpen={setOpen} />
        </Modal>
      )}
    </>
  );
};

export default CreateTodoButton;
