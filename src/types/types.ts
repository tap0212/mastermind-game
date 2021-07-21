export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
    return { type, payload };
}

export type ConfigureFlexTypes = {
    direction: 'row' | 'column';
    alignItems:
        | 'normal'
        | 'stretch'
        | 'baseline'
        | 'center'
        | 'start'
        | 'flex-start'
        | 'flex-end'
        | 'space-around'
        | 'space-evenly';
    justify:
        | 'normal'
        | 'stretch'
        | 'baseline'
        | 'center'
        | 'start'
        | 'flex-start'
        | 'flex-end'
        | 'space-around'
        | 'space-evenly';
};
