import { useEffect, useState } from 'react'

const useFadeCV = (initial) => {
    const [show, setShowCV] = useState(initial);
    const [isVisibleCV, setVisibleCV] = useState(show);
    
    useEffect(() => {
        if (show) setVisibleCV(true);
    }, [show]);
    
    const onAnimationEnd = () => {
        if (!show) setVisibleCV(false);
    };
    
    const style = { animation: `${show ? 'fadeIn' : 'fadeOut'} .3s` };
    
    const fadePropsCV = {
        style,
        onAnimationEnd
    };

    return [isVisibleCV, setShowCV, fadePropsCV];
};

export { useFadeCV }