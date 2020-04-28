import React from 'react';

import {Button, StyleSheet, TouchableHighlight} from 'react-native';
import Particles from 'react-particles-js';

const CustomButton = props => {
    return (
        <TouchableHighlight style={styles.buttonWrapper}>
            <Button onPress={props.onTouch} title={props.title}/>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    buttonWrapper: {
        width: 200,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
});

export default CustomButton;