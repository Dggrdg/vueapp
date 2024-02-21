export type ValidatorType<T> = {
    rule: any,
    value: T,
    cb: (message?: Error) => void
}

export interface Animal {
    eat: string,
    walk: string
}

export interface Human extends Animal {
    talk: string,
    coding: string,
}

export enum data {
    example1,
    example2,
    example3
}