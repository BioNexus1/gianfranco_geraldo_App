import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../constantes/colors'

const NumberContainer = props => {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: colors.accent,
        padding: 10,
        borderRadius:10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: colors.accent,
        fontSize: 20,
        fontFamily: 'EduRegular'

    }
})


export default NumberContainer