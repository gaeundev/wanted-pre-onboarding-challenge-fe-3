import { useEffect, useState } from 'react';
import { PathContext } from '../context/context';

interface RouterInterface {
    children?: JSX.Element | JSX.Element[];
}

const Router = ({ children }: RouterInterface) => {
    const [state, setState] = useState(location.pathname);

    useEffect(() => {
        const popStateEvent = () => setState(location.pathname);

        window.addEventListener('popstate', popStateEvent);

        return () => window.removeEventListener('popstate', popStateEvent);
    }, []);

    return <PathContext.Provider value={{ state, setState }}>{children}</PathContext.Provider>;
};

export default Router;
