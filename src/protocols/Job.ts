//tabela do banco
export type JobEntity = {
    id?: number,
    title: string,
    salary: number,
    skills: (string | number | boolean)[],
    until: string | Date
}

export type Job = Omit<JobEntity, 'id' | 'skills'>