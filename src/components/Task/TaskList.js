import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';
import { getTask } from '../../api/task';

function TaskList({ user }) {
  const [submitTask, setSubmitTask] = useState(false);

  const [listTask, setListTask] = useState([]);
  useEffect(() => {
    getTask(user.id).then((response) => {
      setListTask(response.data);
    });
  }, [submitTask]);
  console.log(listTask);

  return (
    <div className='w-100 d-flex align-items-center flex-column'>
      <div className='input-container'>
        <TaskForm
          user={user}
          submitTask={submitTask}
          setSubmitTask={setSubmitTask}
        />
      </div>
      <div className='list-container'>
        <div className='week d-flex justify-content-between m-3'>
          <span>This week</span>
          <span className='week-total'>00:00:00</span>
        </div>
        {listTask.map((item) => (
          <TaskCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
