import React, { useState} from "react";
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Cards/Card';
import Colors from '../constantes/colors';
import Input from '../components/Input/Input'



const DashboardScreen = () => {
    const [enteredValue, setEnteredValue] = useState('')
    
    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''))
    } 

    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Dashboard</Text>
                <Card style={styles.inputContainer} >
                    <Text>Escoja un numero</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={setEnteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='Limpiar' onPress={()=>{}} color={Colors.accent}/>
                        <Button title='Confirmar' onPress={()=>{}} color={Colors.primary} />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        // alignContent: 'center',
        // flex: 1,
        // width: '100%',
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input:{
        width: '80%',
        textAlign: 'center',
        fontSize: 20
    }
})
export default DashboardScreen