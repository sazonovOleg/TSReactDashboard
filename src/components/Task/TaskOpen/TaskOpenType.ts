export type CommentType = {
    name: string,
    position: string,
    createdAt: string | number
    avatar: string,
    comment: string | undefined
}

export enum TASK_CATEGORY {
    TODO = 'TODO',
    BACKLOG = 'BACKLOG'
}

export type TaskType = {
    isDone: boolean,
    title: string | undefined,
    author: string,
    avatar: string,
    createdAt: string,
    assignTo: string,
    dueOn: string,
    tag:string[],
    followers: string[]
    description: string | undefined
    comments: CommentType[]
    category: TASK_CATEGORY
    id:number
    isOpened: boolean
}