import React from 'react';
import Shake from 'shake.js';

class ShakeDetect extends React.Component {
  shake;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      choosingTip: false,
      message: "",
      tips: [
        "If you're feeling low today, check out our self help resources",
        "Just 10 mins of meditation a day can help relieve stress & anxiety"
      ]
    };
  }

  componentDidMount() {
    this.requestAccelerometerPermission();
  }

  requestAccelerometerPermission() {
    if (this.isAnIphone()) {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            this.configureShakeDetection();
          }
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
      this.configureShakeDetection();
    }
  }

  isAnIphone() {
    return typeof DeviceMotionEvent.requestPermission === 'function';
  }

  configureShakeDetection() {
    this.shake = new Shake({
      threshold: 5, // optional shake strength threshold
      timeout: 1000 // optional, determines the frequency of event generation
    });
    this.shake.start();

    window.addEventListener('shake', () => {
      setTimeout(() => {
        this.setState({choosingTip: true});
      }, 3000)

    }, false);
  }

  componentWillUnmount() {
    this.shake.stop();
  }

  render() {
    return (
      <div>
        <h1>Shake detector!</h1>
        <h2>{this.state.choosingTip ? this.state.tips[Math.floor(Math.random() * this.state.tips.length)] : "Shake your device..."}</h2>
      </div>
    );
  }
}

export default ShakeDetect