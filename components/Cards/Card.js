import React from "react";
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View {...props} style={{...styles.inputCard, ...props.style}}>

        </View>
    )
}

const styles = StyleSheet.create({
    inputCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.84,
        elevation: 5,
    }
})

export default Card