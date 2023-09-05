//Коррирование

import * as React from "react";
import { preventDefault } from "./preventDefault";
import { stopPropagation } from "./stopPropagation";

add(1)(2);

function add(leftSide: number) {
    return (rightSide: number) => leftSide + rightSide;
}

const Add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

const addOne = add(1);

addOne(5); //6

//// ------ ////

const withIdKey = withKey("id");

function Feed(props: { blocks: IBlockProps[] }) {
    return <div>{props.blocks.map((block, index) => withIdKey(Block)(block, index))}</div>;

}

interface IBlockProps {
    title: string;
    id: string;
}

function Block(props: IBlockProps) {
    return <div>{props.title}</div>;
}

export function withKey(key?: string) {
    return <T extends {}>(Component: React.ComponentType<T>) =>
        (props: T & Record<string, any>, index: number) =>
            React.createElement(
                Component,
                { ...props, key: key ? props[key] : index },
                []
            );
}

interface IInputProps {
    onChange: (value: string) => void;
    value: string;
}

//// ------ ////

function Input(props: IInputProps) {
    return (
        <input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)} />
    )
}

interface ICheckboxProps {
    onChange: (value: boolean) => void;
    value: boolean;
}

function Checkbox(props: ICheckboxProps) {
    return (
        <input type='checkbox' checked={props.value} onChange={(e) => props.onChange(e.currentTarget.checked)} />
    )
}

export function pickFromSyntheticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) => <E extends ((t: T[K]) => void)>(fn: E) => (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');

function OverrageInput({ onChange, value }: IInputProps) {
    return (
        <input value={value} onChange={getValue(onChange)} />
    )
}

export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

function OverrageCheckbox(props: ICheckboxProps) {
    return (
        <input type='checkbox' checked={props.value} onChange={getChecked(props.onChange)} />
    )
}


//// ------ ////

function NotStandartLink(props: any) {
    return (
        <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
    )
}

function NewInput({ value, onChange }: IInputProps) {
    return (
        <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
    )
}