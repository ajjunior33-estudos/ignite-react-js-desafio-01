import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react';
import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'

import logoTodo from '../../assets/logo.svg'

export function HeaderComponent({onCreateNewTask}:any) {
  const [nameTask, setNameTask] = useState("");

  function handleChangeNameTask(event: any) {
    setNameTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateNewTask(nameTask);
  }


  return (
    <header className={styles.header}>
      <img src={logoTodo} alt={"Logo Todo"} />

      <form onSubmit={handleCreateNewTask} className={styles.inputTaks}>
        <input type="text" placeholder='Adicione uma nova tarefa' value={nameTask} onChange={handleChangeNameTask} />
        <button type="submit">
          Criar
          <PlusCircle size={16} weight="bold"/>
        </button>
      </form>
    </header>
  )
}

