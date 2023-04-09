import { useEffect, useState } from 'react'

const useFadeAbout = (initial) => {
    const [show, setShowAbout] = useState(initial);
    const [isVisibleAbout, setVisibleAbout] = useState(show);
    
    useEffect(() => {
        if (show) setVisibleAbout(true);
    }, [show]);
    
    const onAnimationEnd = () => {
        if (!show) setVisibleAbout(false);
    };
    
    const style = { animation: `${show ? 'fadeIn' : 'fadeOut'} .3s` };
    
    const fadePropsAbout = {
        style,
        onAnimationEnd
    };

    return [isVisibleAbout, setShowAbout, fadePropsAbout];
};

export { useFadeAbout }