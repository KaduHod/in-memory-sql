export const deepCopy = <T extends object>(object:T) => {
    const newValue = Array.isArray(object) ? [] : {};
    for (const key in object) {

        const value = typeof object[key as keyof T] === "object" 
            ? deepCopy(object[key as keyof {}])
            : object[key as keyof {}]
        
        Object.defineProperty(newValue, key, {
            enumerable: true,
            writable:true,
            configurable: true,
            value
        })
    }

    return newValue as T;
}