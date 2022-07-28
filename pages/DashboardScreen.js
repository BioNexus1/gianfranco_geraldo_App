import React, { useState} from "react";
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../components/Cards/Card';
import Colors from '../constantes/colors';
import Input from '../components/Input/Input'
import NumberContainer from '../components/Container/NumberContainer';


const DashboardScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''))
    } 

    const handlerResetInput = () => {
        setConfirmed(false)
        setEnteredValue('')
    }

    const handlerConfirmInput = () => { //funccion para confirmar el Input
        let choseNumber = parseInt(enteredValue)
        if(choseNumber === NaN || choseNumber < 0 || choseNumber > 99 || choseNumber.length < 1 ) return //considerar todas las opciones
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')

    }

    const confirmetOutput = confirmed ? <Text>Numero Elegido: {selectedNumber}</Text> : null
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
                        onChangeText={handlerInputNumber}
                    />
                    <View style={styles.buttonContainer}>
                        {enteredValue.length > 0 &&(
                            <>
                                <Button title='Limpiar' onPress={()=> handlerResetInput()} color={Colors.accent}/>
                                <Button title='Confirmar' onPress={()=> handlerConfirmInput()} color={Colors.primary} 
                                disabled = {enteredValue.length < 2 ? true : false}
                                />
                            </>
                        )

                        }
                    </View>
                </Card>
                {confirmed &&(
                    <Card style={styles.sumaryContainer}>
                        <Text>Tu seleccion</Text>
                        <NumberContainer>
                            {selectedNumber}
                        </NumberContainer>
                        <Button title='Empezar El juego'
                        onPress={() => props.onStartGame(selectedNumber)}
                        />
                    </Card>
                )

                }
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
        fontFamily: 'EduBold',
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        height: '25%',
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
    },
    sumaryContainer:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
        height: '20%'
    }
})
export default DashboardScreen