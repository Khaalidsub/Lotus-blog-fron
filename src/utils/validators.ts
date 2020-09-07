import { CredentialAction } from "../store/interface";

export const required = (val) => val && val.length;
export const maxLength = (len: number) => (val) => val.length <= len;
export const minLength = (len: number) => (val) => val.length >= len;
export const isNumber = (val) => !isNaN(Number(val));
export const validEmail = (val: string) => regexp.test(val);
const regexp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
