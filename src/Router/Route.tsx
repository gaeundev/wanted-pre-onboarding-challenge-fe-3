import { useContext } from 'react';
import { PathContext } from '../context/context';

interface RouteInterfact {
    path: string;
    component: JSX.Element;
}

const Route = ({ path, component }: RouteInterfact) => {
    const value = useContext(PathContext);

    if (value.state === path) return component;

    return <></>;
};

export default Route;
