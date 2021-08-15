export type CommentType = {
    name: string,
    position: string,
    createdAt: string,
    avatar: string,
    comment: string
}

export enum TASK_CATEGORY {
    TODO = 'TODO',
    BACKLOG = 'BACKLOG'
}

export type TaskType = {
    isDone: boolean,
    title: string,
    author: string,
    avatar: string,
    createdAt: string,
    assignTo: string,
    dueOn: string,
    tag:string[],
    followers: string[]
    description: string
    comments: CommentType[]
    category: TASK_CATEGORY
}