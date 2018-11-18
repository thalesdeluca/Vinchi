import React from 'react';
import { View } from 'react-native';

class ProgressBar extends React.Component {
  render() {
    const { color, goal, progress } = this.props;
    const { backgroundStyle, goalStyle, progressStyle } = styles;
    return(
      <View style = {backgroundStyle}>
        <View style = {[goalStyle, {width: goal}]}>
          
        </View>
        <View style = {[progressStyle, {backgroundColor: color, width: progress}]}/>
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    margin: 10,
    height: 8,
    backgroundColor: 'rgba(10,10,10,0.4)',
    width: '100%',
    borderRadius: 12,
  },
  goalStyle: {
    borderRightWidth: 1,
    borderRightColor: '#aaa',
    height: 8,
    position: 'relative',
  },
  progressStyle: {
    height: 8,
    borderRadius: 12,
    top: -8,
    position: 'relative',
  }

}
export { ProgressBar };