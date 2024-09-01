export const fieldRequired = (value:any) =>
    value ? undefined : 'Это поле нужно заполнить';

export const fieldWithNumbers = (value: any) =>
    /[^0-9]/.test(value) ? 'Это поле может содержать только цифры' : undefined;


export const fieldLenghtRestricted = (min:number) => (value:string) =>
   value.length === min ? undefined : `Поле должно содержать ${min} символов`;


export const composeValidators = (...validators:any[]) => (value:any) =>
    validators.reduce((error, validator) => error || validator(value), undefined)