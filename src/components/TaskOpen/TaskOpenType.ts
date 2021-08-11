export interface TaskOpenItems {
    title: string,
    preview?: string,
    text?:string,
    followers?:string[]
}

export type TaskOpenProps = {
    title: string,
    subtitle: string,
    header_items: TaskOpenItems[],
    description_items: TaskOpenItems[]
}