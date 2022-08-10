import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';
import { getTask } from '../../api/task';

function TaskList({ user }) {
  const [listTask, setListTask] = useState([]);
  const [removeTask, setRemoveTask] = useState(false);

  useEffect(() => {
    getTask(user.id).then((response) => {
      setListTask(response.data);
    });
  }, [removeTask]);

  return (
    <div className='w-100 d-flex align-items-center flex-column'>
      <div className='input-container'>
        <TaskForm user={user} listTask={listTask} setListTask={setListTask} />
      </div>
      <div className='list-container'>
        {/* {listTask.map((item) =>() )} */}

        <div className='week d-flex justify-content-between m-3'>
          <span>This week</span>
          <span className='week-total'>00:00:00</span>
        </div>
        {listTask.map((item) => (
          <TaskCard
            key={item.id}
            item={item}
            listTask={listTask}
            removeTask={removeTask}
            setRemoveTask={setRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
