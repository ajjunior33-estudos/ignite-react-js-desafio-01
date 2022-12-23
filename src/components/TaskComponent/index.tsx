import { Check, Trash } from "phosphor-react";
import styles from './styles.module.css'

interface Props {
  task: {
    id: string
    content: string;
    checked: boolean;
  },
  onDeleteTask: (taskIDDelete: string) => void;
  updateCheckedTaks: (taskId: string) => void;
}
export function TaskComponent({ task, onDeleteTask, updateCheckedTaks }: Props) {
  return (
    <main className={styles.task}>
      {task.checked === false ? (
        <button className={styles.unchecked} onClick={() => updateCheckedTaks(task.id)}></button>) : (
        <button className={styles.checked} onClick={() => updateCheckedTaks(task.id)}>
          <Check weight="bold" /> 
        </button>)
      }
      <p className={task.checked === false ? styles.textUnchecked : styles.textChecked}>{task.content}</p>
      <button className={styles.trashButton} onClick={() => onDeleteTask(task.id)}>
        <Trash size={20} weight="bold" />
      </button>
    </main>
  )
}