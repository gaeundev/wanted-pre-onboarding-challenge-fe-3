import useRouter from '../customHook/useRouter';

interface LinkInterface {
    children?: React.ReactNode;
    path: string;
}

const Link = ({ path, children }: LinkInterface) => {
    const { push } = useRouter();

    const handler = () => push(path);

    return <a onClick={handler}>{children}</a>;
};

export default Link;
