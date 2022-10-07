interface RouteInterfact {
    path: string;
    component: JSX.Element;
}

const Route = ({ path, component }: RouteInterfact) => {
    const url = 'http://127.0.0.1:5173' + path;

    if (window.location.href === url) return component;

    return <></>;
};

export default Route;
