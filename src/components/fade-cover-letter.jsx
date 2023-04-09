import { useEffect, useState } from 'react'

const useFadeCL = (initial) => {
    const [show, setShowCL] = useState(initial);
    const [isVisibleCL, setVisibleCL] = useState(show);
    
    useEffect(() => {
        if (show) setVisibleCL(true);
    }, [show]);
    
    const onAnimationEnd = () => {
        if (!show) setVisibleCL(false);
    };
    
    const style = { animation: `${show ? 'fadeIn' : 'fadeOut'} .3s` };
    
    const fadePropsCL = {
        style,
        onAnimationEnd
    };

    return [isVisibleCL, setShowCL, fadePropsCL];
};

export { useFadeCL }