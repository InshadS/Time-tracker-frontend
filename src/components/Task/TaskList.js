import React, { useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/index';

const TaskList = observer(({ user }) => {
  const { tasksStore } = useStore();
  const { tasks, getTask, setUserId } = tasksStore;

  setUserId(user.id);

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className='w-100 d-flex align-items-center flex-column'>
      <div className='input-container'>
        <TaskForm />
      </div>
      <div className='list-container'>
        <div className='week d-flex justify-content-end m-3'>
          <span>Week total</span>
          <span className='week-total'>
            <span>00:00:00</span>
            {/* {listTask.map((item) => (
              <span>{item.task_duration}</span>
            ))} */}
          </span>
        </div>
        {tasks.map((item) => (
          <TaskCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
});

export default TaskList;
