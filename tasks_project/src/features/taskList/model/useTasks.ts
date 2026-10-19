import { useGetTasksQuery } from 'entities/task/api/taskApi';
import { Task } from 'entities/task/model/types';
import { useEffect, useMemo, useState } from 'react';

export type Filter = 'all' | 'completed' | 'incomplete';

export interface UseTasksResult {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: number) => void;
  isLoading: boolean;
  isError: boolean;
}

export const useTasks = (): UseTasksResult => {
  const { data: remoteTasks, isLoading, isError } = useGetTasksQuery();

  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    if (remoteTasks && remoteTasks.length > 0 && allTasks.length === 0) {
      setAllTasks(remoteTasks);
    }
  }, [remoteTasks]);

  const removeTask = (id: number) => {
    setAllTasks((prev) => prev.filter((item) => Number(item.id) !== id));
  };

  const tasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return allTasks.filter((item) => item.completed);
      case 'incomplete':
        return allTasks.filter((item) => !item.completed);
      default:
        return allTasks;
    }
  }, [allTasks, filter]);

  return { tasks, filter, setFilter, removeTask, isLoading, isError };
};
