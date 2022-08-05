import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskList({ user }) {
  return (
    <div>
      <TaskForm user={user} />
    </div>
  );
}

export default TaskList;
