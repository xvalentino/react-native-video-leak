import React, { Component,} from 'react';

import {
  AppRegistry,
  View,
} from 'react-native';

import Video from 'react-native-video';

class VideoMemoryLeak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.visible && !this.state.visible) {
      this.setState({visible: true,});
    }
  }

  render() {
    const { visible } = this.state;
    let component;
    if (visible) {
      component = <Video source={{uri: "http://0.s3.envato.com/h264-video-previews/80fad324-9db4-11e3-bf3d-0050569255a8/490527.mp4"}}
                    resizeMode='cover'
                    onLoad={() => this.setState({visible: false})}
                    style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,}}
                    rate={1.0}
                    paused={false}
                    volume={0}
                    muted={true}
                    repeat={true} />;
    } else {
      component = <View/>;
    }

    return component;
  }
}

AppRegistry.registerComponent('VideoMemoryLeak', () => VideoMemoryLeak);
