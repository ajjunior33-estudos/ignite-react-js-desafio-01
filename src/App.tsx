import { HeaderComponent } from "./components/Header";
import { ListTasksComponent } from "./components/ListTasks";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import { reorderByStatusTasks } from "./Utils/reorderByStatusTasks";

interface Task {
  id: string
  content: string
  checked: boolean
}

export function App() {
  const [listTasks, setListTasks] = useState<Task[] | []>([])

  useEffect(() => {
    setTimeout(() => {
    setListTasks(reorderByStatusTasks([
      {
        id: uuid(),
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        checked: true
      },
      {
        id: uuid(),
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        checked: false
      },
      {
        id: uuid(),
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        checked: false
      },
      {
        id: uuid(),
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        checked: false
      },
    ]))  
    }, 1000);
  },[]);



  function onCreateNewTask(content: string): void {

    const tmpTasks = [...listTasks, {
      id: uuid(),
      content,
      checked: false
    }];

    setListTasks(reorderByStatusTasks(tmpTasks));
  }
  return (
    <main id="App">
      <HeaderComponent onCreateNewTask={onCreateNewTask} />
      <ListTasksComponent listTasks={listTasks} onChangeListTasks={setListTasks} />
    </main>
  )
}
