import { createContext } from 'react';



const DEFAULT_CONTEXT = {
    selected: '',
    refs: {},
    meta: {},
    scrollTo: () => {},
    registerRef: () => null,
};

export const ScrollContext = createContext(DEFAULT_CONTEXT);

export const { Consumer, Provider } = ScrollContext;
