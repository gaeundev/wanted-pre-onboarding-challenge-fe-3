import { createContext } from 'react';

interface ContextInterface {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const PathContext = createContext<ContextInterface>({
    state: '/',
    setState: () => {}
});

export { PathContext };
