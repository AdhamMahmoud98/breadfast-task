import React, { useEffect, useState } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashWindow = () => {
  const navigation = useNavigation();
  const [opacity] = useState(new Animated.Value(0)); // Create an Animated value for opacity

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }, 3000);

    // Animate opacity to 1 over 1 second
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true, // Improve performance (optional)
    }).start();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/splash/breadFastTaskSplash.png')}
        style={[styles.image, { opacity }]} // Apply animated opacity
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export {SplashWindow};
