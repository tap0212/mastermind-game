// see https://github.com/reduxjs/reselect/issues/476
namespace Reselect {
    export function createStructuredSelector<S, T extends Record<string, Reselect.Selector<S>>>(
        selectors: T,
        selectorCreator?: typeof Reselect.createSelector,
    ): Reselect.Selector<S, { [K in keyof T]: ReturnType<T[K]> }>;
}
