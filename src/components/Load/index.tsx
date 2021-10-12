import React from 'react'
import Lottie from 'react-lottie'

import load from './../../assets/lottie/load.json'

export const Load: React.FC = () => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: load,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
      height={400}
      width={400}
    />
  )
}
