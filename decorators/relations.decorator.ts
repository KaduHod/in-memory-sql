export namespace Relations {
    export function HasMany<T>(args:HasManyArgs<T>){
        return function(target: any, key: string) {
            target.hasManyArgs = args

            return target

            // Object.defineProperty(target, "hasManyArgs", {
                // enumerable: true,
                // configurable: true
            // })
        };
    }

    export function HasOne(){}
    
    export function BelongsTo(){}
    
    export function BelgonsToMany(){}
    
    export function ManyToMany(){}
}


export type HasManyArgs<T> = {
    referencedColumn: keyof T,
    targetEntity: (type?:any) => ObjectType<T>
}
export type HasOneArgs = {}
export type BelongsToArgs = {}
export type ManyToManyArgs = {}

export type ObjectType<T> = {
    new (): T;
} | Function;