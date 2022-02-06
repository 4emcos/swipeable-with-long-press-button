import React from 'react';
import { View, StyleSheet, Text, Animated,} from 'react-native';
import { Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
// import { Container } from './styles';

export function Separator() {
  return <View style={styles.separator} />;
}

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });
  return (
    <View style={styles.leftAction}>
      <Text style={styles.actionText}>ADD </Text>
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Discard</Animated.Text>
    </View>
  );
}


const RightActions = ({progress, dragX, onLongPress}) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });
  return (
    <TouchableOpacity 
      onLongPress={() => onLongPress()}
      delayLongPress={1000}
      >
      <View style={styles.rightAction}>
        <Text style={styles.actionText}>Delete</Text>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Discard</Animated.Text>
      </View>
    </TouchableOpacity>
  );
}
export default function ListItem({ text, onSwipeFromLeft, onSwipeFromRight }) {
  return (
    <Swipeable
      key={text}
      onSwipeableLeftOpen={onSwipeFromLeft}
      renderLeftActions={LeftActions}
      renderRightActions={(progress, dragX) => <RightActions progress={progress} dragX = {dragX} onLongPress = {onSwipeFromRight}/>}
      leftThreshold={50}
      rightThreshold={20}
    >
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  separator: {
    height: 1,
    flex: 1,
    backgroundColor: '#DDD',
    marginLeft: 10,
  },
  leftAction: {
    flex: 1,
    backgroundColor: '#388e4c',
    justifyContent: 'center',
  },

  rightAction: {
    // flex: 1,
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  actionText: {
    color: 'white',
    fontSize: 16,
    padding: 20,
    fontWeight: '600',
  },

});
