import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({size = 16, color= '#ffd600'}) =>{
  return (
    <View>
      <ActivityIndicator size = {size} color = {color}/>
    </View>

  );
}

export { Spinner }