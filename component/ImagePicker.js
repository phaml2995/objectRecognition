import React, { useState } from 'react';

import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import CustomButton from './CustomButton';


const ImageSelector = props => {
    const [pickedImage, setPickedImage] = useState();

    const getPermissionHandler = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (result.status !== 'granted') {
            Alert.alert(
                'Access Denied!',
                "You can't access Camera without permission",
                [{ text: 'Okay' }]
            )
            return false;
        }
        return true;
    };

    const takePictureHandler = async () => {
        const hasPermission = await getPermissionHandler();
        if (!hasPermission) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: false,
            aspect: [16, 9],
            quality: 0.5,
            base64: true
        });
        
        setPickedImage(image.uri);
        props.onImageTaken(image.base64);
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.textContainer}>
                {!pickedImage
                    ? (<Text style={styles.text}>No Image Picked Yet</Text>)
                    : (<Image style={styles.image} source={{ uri: pickedImage }} />)
                }
            </View>
            <CustomButton
                title='Take Picture'
                onTouch={takePictureHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
    },

    textContainer: {
        width: 400,
        height: '70%',
        marginBottom: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});

export default ImageSelector;