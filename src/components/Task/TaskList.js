import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/index';

const TaskList = observer(({ user }) => {
  const { tasksStore } = useStore();
  const {
    tasks,
    getTask,
    setUserId,
    pageIncrement,
    pageDecrement,
    page,
    size,
  } = tasksStore;

  setUserId(user.id);

  useEffect(() => {
    getTask();
  }, [page, size]);

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
        <div className='pagination-container d-flex justify-content-center'>
          {/* <span>
            {<>{page * size - (size - 1)} </>}
            -&nbsp;
            <>{page * size} </>
          </span> */}
          <button
            onClick={pageDecrement}
            className='pagination-btn'
            disabled={page * size - (size - 1) === 1}
          >
            {'<'}
          </button>
          <span> {page}</span>
          <button
            onClick={pageIncrement}
            className='pagination-btn'
            disabled={page * size >= tasks}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
});

export default TaskList;
