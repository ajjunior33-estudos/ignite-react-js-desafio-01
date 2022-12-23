import styles from './styles.module.css'
import Clipboard from '../../assets/Clipboard.svg';
export function ListEmptyComponent() {
  return (
    <div className={styles.listEmpty}>
      <img src={Clipboard} alt={"Icone de clipboard"}/>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}