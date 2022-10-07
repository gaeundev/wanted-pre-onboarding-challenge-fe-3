interface RouterInterface {
    children?: JSX.Element | JSX.Element[];
}

const Router = ({ children }: RouterInterface) => {
    return <>{children}</>;
};

export default Router;
