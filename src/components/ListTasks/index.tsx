import { reorderByStatusTasks } from '../../Utils/reorderByStatusTasks';
import { ListEmptyComponent } from '../ListEmpty';
import { TaskComponent } from '../TaskComponent';
import styles from './styles.module.css';

interface Task {
  id: string
  content: string
  checked: boolean
}

interface ListTasksProps {
  listTasks: Task[]
  onChangeListTasks: any;
}

export function ListTasksComponent({ listTasks, onChangeListTasks }: ListTasksProps) {
  function onDeleteTask(taskIDDelete: string) {
    const taskWithoutDeletedOne = listTasks.filter((task) => {
      return task.id !== taskIDDelete;
    });

    onChangeListTasks(reorderByStatusTasks(taskWithoutDeletedOne));
  }

  function updateCheckedTaks(taskIdChecked: string) {
    const taskIndex = listTasks.findIndex(( task) => task.id === taskIdChecked);
    const tmpTasks = [...listTasks];
    tmpTasks[taskIndex].checked = !tmpTasks[taskIndex].checked
    
    onChangeListTasks(reorderByStatusTasks(tmpTasks));
  }


  return (
    <main className={styles.listTasks}>

      <header>
        <div className={styles.countCreated}>
          <strong>Tarefas Criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.countCheckeds}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>
      <main>
        {listTasks.length === 0 && (
          <ListEmptyComponent />
        )}

        {listTasks.length > 0 && listTasks.map(task => (
          <TaskComponent task={task} onDeleteTask={onDeleteTask} updateCheckedTaks={updateCheckedTaks} />
        ))}
      </main>
    </main>
  )
}