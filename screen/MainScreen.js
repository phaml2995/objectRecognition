import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import ImageSelector from '../component/ImagePicker';
import { LinearGradient } from 'expo-linear-gradient';
import ENV from '../env';

const MainScreen = props => {
    const [image, setImage] = useState();
   
    const imageHandler = path => {
        setImage(path)
    }

    const objectIdentifyHandler = async (imageData) => {
        const Clarifai = require('clarifai');

        const app = new Clarifai.App({
            apiKey: ENV.Clarifai_API
        });

        const response = await app.models.predict(Clarifai.GENERAL_MODEL, { base64: imageData });
        displayResult(response.outputs[0].data.concepts[0].name);
    }

    const displayResult = object => {
        Alert.alert('Your result', 'This is a '.concat(object));
    }

    return (
        <LinearGradient colors={['#c33764', '#1d2671']} style={styles.gradient}>
            <View style={styles.mainView}>
                <ImageSelector onImageTaken={imageHandler} />

                {image && <View style={styles.customButtonContainer}>
                    <Button title='Analyze' onPress={() => { objectIdentifyHandler(image) }} />
                </View>}
            </View>
        </LinearGradient>
    )
}

MainScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButtonContainer: {
        position: 'absolute',
        bottom:130,
        width: 200,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MainScreen;