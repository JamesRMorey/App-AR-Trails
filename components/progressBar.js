import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';

const Progress = ({ step, steps, height }) => {
    const animatedValue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;
    const [width, setWidth] = useState(0);

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);

    React.useEffect(() => {
        reactive.setValue(-width + (width * step) / steps)
    }, [step, width])

    return (
        <View style={{
            height,
            backgroundColor: '#D3D3D3',
            borderRadius: height,
            overflow: 'hidden',
        }}>
        <Animated.View 
        onLayout={e => {
            const newWidth = e.nativeEvent.layout.width;
            setWidth(newWidth);
        }}
        style={{
            height,
            borderRadius: height,
            backgroundColor: '#fa7002',
            width: '100%',
            position: 'absolute',
            transform: [{
                translateX: animatedValue,
            }]
        }}/>
    </View>
    )
}

export default function ProgressBar( { step, steps }) {
  return (
    <View style={styles.container}>
      <Progress step={step} steps={steps} height={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'center',
  },
});