import { useContext } from 'react';
import { PathContext } from '../context/context';

const useRouter = () => {
    const value = useContext(PathContext);

    const push = (path: string) => {
        value.setState(path);
        window.history.pushState('', '', path);
    };

    return { push };
};

export default useRouter;
