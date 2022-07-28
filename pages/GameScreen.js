import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text, Button} from 'react-native';
import Card from "../components/Cards/Card";
import NumberContainer from "../components/Container/NumberContainer";


const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState()

    const generateRandomBetween = (min,max, userChoice) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        let randomNumber = Math.floor(Math.random() * (max - min) + min)
        if(randomNumber === userChoice){
            return generateRandomBetween(min, max, userChoice)
        }
        else{
            return setCurrentGuess(randomNumber)
        }

    }

    useEffect(() => {
        generateRandomBetween(1, 100, props.userOption)
    }, [])
    return (
        <View style={styles.screen}>
            <Text>la suposicion del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button
                    title='Menor'
                    onPress={() => {}}
                />
                <Button
                    title='Mayor'
                    onPress={() => {}}
                />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        padding: 10,
        alignItem: 'center',
        // justifyContent: 'center'

    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen