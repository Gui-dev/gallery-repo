import React from 'react'
import Lottie from 'react-lottie'

import load from './../../assets/lottie/load.json'

type LoadProps = {
  height?: number
  width?: number
}

export const Load = ({ height = 400, width = 400 }: LoadProps) => {
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
      height={height}
      width={width}
    />
  )
}
