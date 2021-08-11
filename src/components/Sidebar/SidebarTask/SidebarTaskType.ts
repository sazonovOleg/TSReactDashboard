export type TaskInfoType = {
    taskCount: number,
    taskText: string
}

export interface SidebarTaskProps {
    info?:TaskInfoType[]
}