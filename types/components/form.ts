import React from "react";

export interface inputr
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  onChange?: (value: any) => any;
  Icon?: React.FC;
  clickFn?: () => any;
}

export type selectValue = string | number | Array<string | number>;

export type selectr = {
  label?: string;
  name: string;
  value?: selectValue;
  onChange?: (...arg: any) => any;
  multiple?: boolean;
  linear?: boolean;
};

export type multiSelectr = {
  label?: string;
  name: string;
  value?: Array<string | number>;
  onChange?: (...arg: any) => any;
  multiple?: boolean;
  linear?: boolean;
};

export type option = {
  value: string | number;
};

export type pOption = {
  value: string | number;
  selected: boolean;
  toggleSelection: (value: string | number) => any;
};

export interface submitr
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "submit";
}

export interface textarea
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  name: string;
  height?: string;
  onChange?: (value: any) => any;
}
