import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lottieAnimationJson/22794-portraits-of-the-flatten-people.json'

class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div >
        <Lottie style = {{border:'none',borderRadius:50}} options={defaultOptions}
              height={100}
              width={100}
              speed={0.2}
        />
      </div>
    )
  }
}

export default UncontrolledLottie