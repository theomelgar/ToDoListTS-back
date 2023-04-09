export type ListEntity = {
    id?: number,
    thing: string,
    isDone: boolean,
    createdAt?: string | Date,
    updatedAt?: string | Date
}

export type List = Omit<ListEntity, 'id' | 'createdAt'>