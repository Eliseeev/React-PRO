import { baseApi } from 'shared/api/baseApi';
import type { Task } from '../model/types';

interface JsonTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => 'todos',

      transformResponse: (response: JsonTodo[] | { todos: JsonTodo[] }): Task[] => {
        const todos = Array.isArray(response) ? response : response.todos;

        return todos.map((item) => ({
          id: String(item.id),
          title: item.title,
          completed: item.completed,
        }));
      },

      providesTags: ['Tasks'],
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;