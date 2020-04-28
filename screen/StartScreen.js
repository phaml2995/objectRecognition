import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../component/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';

const StartScreen = props => {
    return (
        <LinearGradient colors={['#c33764', '#1d2671']} style={styles.gradient}>
            <View style={styles.mainView}>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        onTouch={() => {
                            props.navigation.navigate('Main');
                        }}
                        title="Lest's Start" />
                </View>
            </View>
        </LinearGradient>
    )
}
StartScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default StartScreen;