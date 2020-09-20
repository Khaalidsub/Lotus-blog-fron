export const required = (val: any) => val && val.length;
export const maxLength = (len: number) => (val: any) => val.length <= len;
export const minLength = (len: number) => (val: any) => val.length >= len;
export const isNumber = (val: any) => !isNaN(Number(val));
export const validEmail = (val: string) => regexp.test(val);
const regexp: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
