import { useEffect, useState } from 'react'

const useFade = (initial) => {
    const [show, setShow] = useState(initial);
    const [isVisible, setVisible] = useState(show);

    useEffect(() => {
        if (show) setVisible(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setVisible(false);
    };

    const style = { animation: `${show ? "fadeOut" : "fadeIn"} .3s` };

    const fadeProps = {
        style,
        onAnimationEnd
    };

    return [isVisible, setShow, fadeProps];
};

export { useFade }