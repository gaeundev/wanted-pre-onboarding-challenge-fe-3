const useRouter = () => {
    const push = (path: string) => {
        window.location.href = path;
    };

    return { push };
};

export default useRouter;
