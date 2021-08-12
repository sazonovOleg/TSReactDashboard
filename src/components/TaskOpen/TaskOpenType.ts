export interface TaskOpenItems {
    title: string,
    preview?: string,
    text?:string,
    color?: string,
    followers?:string[]
}

export interface TaskCommentsProps {
    preview: string,
    first_name: string,
    last_name: string,
    position: string,
    date: string,
    text: string
}

export type TaskCommentsType = {
    comments: TaskCommentsProps[]
}

export type TaskOpenProps = {
    title: string,
    subtitle: string,
    header_items: TaskOpenItems[],
    description_items: TaskOpenItems[],
    comment_items: TaskOpenItems[]
}