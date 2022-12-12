/* eslint func-style: ["error", "declaration"] */

async function asyncFilter<T>(
    arr: T[],
    predicate: (currentValue: T, currentIndex: number) => Promise<boolean>,
) {
    return arr.reduce<Promise<T[]>>(
        async (resultPromise, e, currentIndex: number) => {
            const result = await resultPromise;
            return result.concat((await predicate(e, currentIndex)) ? [e] : []);
        },
        Promise.resolve([]),
    );
}

export { asyncFilter };
