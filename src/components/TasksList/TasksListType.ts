export interface TasksListItems {
    checkbox?: boolean,
    text: string,
    preview: string,
    position: string
}

export type TasksListProps = {
    title: string,
    items: TasksListItems[]
}