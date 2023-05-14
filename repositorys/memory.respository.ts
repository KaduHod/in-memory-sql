import InMemoryModel from "../models/model.inMemory"

export type InMemoryColumn = {[key:string]:any}
export type InMemoryTable = InMemoryColumn[]

export class InMemoryRepository<T extends InMemoryModel<T>> {
    constructor(
        private data:T[]
    ){}

    public findBy(){}
    public findFirst(){}
    public find(){}
}