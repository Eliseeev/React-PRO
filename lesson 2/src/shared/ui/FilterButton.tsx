import { Filter } from 'features/taskList/model/useTasks';
import styles from './FilterButton.module.css';

interface FilterButtonProps {
  value: Filter;
  label: string;
  current: Filter;
  onChange: (f: Filter) => void;
}

export const FilterButton = ({
  value,
  label,
  current,
  onChange,
}: FilterButtonProps) => {
  return (
    <button
      className={styles.filterButton}
      onClick={() => onChange(value)}
      disabled={current === value}
    >
      {label}
    </button>
  );
};
