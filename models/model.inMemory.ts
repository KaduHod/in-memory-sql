import { HasManyArgs } from "../decorators/relations.decorator";

export default class InMemoryModel<T> {
    public hasManyArgs?: HasManyArgs<T> 
    constructor(){}
}