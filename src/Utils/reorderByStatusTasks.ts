interface Task {
  id: string
  content: string
  checked: boolean
}
export const reorderByStatusTasks = (listTasks: Task[]) => {
  return listTasks.sort((a:any, b: any) => a.checked - b.checked)
}