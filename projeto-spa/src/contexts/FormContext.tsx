import React, { ReactNode } from 'react';
import {createContext, useContext, useReducer} from 'react';

type State = {
    currentPage: number;
    name: string;
    secondName: string;
    email: string;
    password: string;
    vacancy: number;
    statusEx: string;
    responsability: string;
    profile: string;
}
type Action = {
    type: FormActions;
    // any pois podemos receber varios tipos de payload, number, string, array...
    payload: any;
}
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentPage: 0,
    name: '',
    secondName: '',
    email: '',
    password: '',
    vacancy: 0,
    statusEx: '',
    responsability: '',
    profile: ''
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
    setCurrentPage,
    setName,
    setSecondName,
    setEmail,
    setPassword,
    setVacancy,
    setStatusEx,
    setResponsability,
    setProfile
}
const formReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setCurrentPage:
            return {...state, currentPage: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setSecondName:
            return {...state, secondName: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setPassword:
            return {...state, password: action.payload};
        case FormActions.setVacancy:
            return {...state, vacancy: action.payload};
        case FormActions.setStatusEx:
            return {...state, statusEx: action.payload};
        case FormActions.setResponsability:
            return {...state, responsability: action.payload};
        case FormActions.setProfile:
            return {...state, profile: action.payload};
        default:
            return state;
    }
}

//Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch};
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

//Context Hook
export const useForm = () => {
    const context = useContext(FormContext);

    //verifica se nao está indefinido, se estiver indefinido signfica que o hook está sendo usado em um contexto fora do provider
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}