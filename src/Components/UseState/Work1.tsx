import React, { useEffect, useState } from "react";

const Work1: React.FC = () => {
    const [data, setData] = useState<boolean>(true);
    const [item, setItem] = useState<boolean>(true);

    useEffect(() => {
        console.log("hello i am useEffect for too many states");
    }, [item, data]);

    function onclickofdata(): void {
        setData(!data);
    }
    function onclickofitem(): void {
        setItem(!item);
    }

    const button: JSX.Element = (
        <>
            <button onClick={onclickofdata}>Click on me</button>
            <button onClick={onclickofitem}>Click</button>
        </>
    );

    return button;
}

export default Work1;
