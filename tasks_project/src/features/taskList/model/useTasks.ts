import { useMemo, useState } from 'react';
import type { Task } from '../../../entities/task/model/types';

export type Filter = 'all' | 'completed' | 'incomplete';

interface Response {
  tasks: Task[]; // отфильтрованные задачи
  filter: Filter; // текущий фильтр
  setFilter: (f: Filter) => void; // смена фильтра
  removeTask: (id: string) => void; // удаление задачи по ID
}

export const useTasks = (initial: Task[]): Response => {
  const [data, setData] = useState<Task[]>(initial);
  const [filter, setFilter] = useState<Filter>('all');

  const removeTask = (id: string) =>
    setData((prev) => prev.filter((item) => item.id !== id));

  const tasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return data.filter((item) => item.completed);
      case 'incomplete':
        return data.filter((item) => !item.completed);
      default:
        return data;
    }
  }, [data, filter]);

  return { tasks, filter, removeTask, setFilter };
};
