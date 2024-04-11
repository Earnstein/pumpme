import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';
import animationData from "@/assets/pumpme.json";

const Animation = () => {
    const animationRef = useRef<LottieRefCurrentProps | null>(null);
  return (
    <Lottie animationData={animationData}
    lottieRef={animationRef}
    onComplete={() => {
        animationRef.current?.setDirection(1);
        animationRef.current?.goToAndPlay(0, true);
        animationRef.current?.setDirection(-1);
    }
    }
    />
  )
}

export default Animation;