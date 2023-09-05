import * as React from "react";
import { getValue } from "../utils/react/FunctionalExamples";
import { preventDefault } from "../utils/react/preventDefault";
import { stopPropagation } from "../utils/react/stopPropagation";

function InputExample({ onChange, value }: any) {
    //   return <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />;
    // return <input value={value} onChange={compose(onChange, getValue, stopPropagation, preventDefault)} />;
    return <input value={value} onChange={pipe(preventDefault, stopPropagation, getValue, onChange)} />;
}

function compose<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U => fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U => fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

//--//

function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop]

}

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}

function cond(b: boolean) {
    return !b;
}

const some = pick('value')({ value: 1 }) //1

const comments = [{ id: 22, text: 'text One' }, { id: 44, text: 'text Two' }];

const filteredComments = comments.filter(({ id }) => id != 22);

const createFilterBy = (prop: string) => (id: number) => pipe(pick('id'), isEqual(id), cond);

const filterWithId = createFilterBy("id");
const filterWithId22 = createFilterBy("id")(22);
const filterByValue = createFilterBy('value');

const filteredComments2 = comments.filter(filterWithId22);

const getValueNumber = pipe<number>(
    pick('currentTarget'),
    pick('value'),
    parseInt
)

