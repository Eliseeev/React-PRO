##  Работа с Profiler
<img width="975" height="560" alt="Profiler" src="https://github.com/user-attachments/assets/b4a4da5c-a059-44eb-9f44-4f37007aaa05" />


1) Улучшение в части оптимизации. Обернул внутри хука useTasks функции removeTasks в useCallback, tasks в useMemo.
 Добавление обёртки компонента TaskCard в react.memo.
2) Компонент TaskList имеет частую перерисовку. В свою очередь компонент FilterButton имеет минимальную перерисовку. 
