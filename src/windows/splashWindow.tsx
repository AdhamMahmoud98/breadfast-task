import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SplashWindow = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
        }, 3000); 

        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/splash/breadFastTaskSplash.png')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: 200,
        height: 200,
    },
});

export { SplashWindow }