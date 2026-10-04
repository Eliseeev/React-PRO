import { Task } from 'entities/task/model/types';
import styles from './TaskCard.module.css';
import React from 'react';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = React.memo(({ task }: TaskCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.id}>{task.id}.</span>
        <span className={styles.title}>{task.title}</span>
      </div>
    </div>
  );
});
