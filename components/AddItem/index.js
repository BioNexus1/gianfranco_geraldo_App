import {Button, StyleSheet, View, TextInput} from 'react-native'

export default function addItem(props){
    const {textItem, onHandlerAddItem, onHandlerChangeItem} = props

    return(
        <View style={ styles.inputContainer }>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}> */}
            <TextInput 
            placeholder='Ingrese aqui' 
            style={ styles.input } 
            value={textItem}
            onChangeText={onHandlerChangeItem}
            />
            <Button title='Add' onPress={onHandlerAddItem} disabled={textItem.length === 0 ? true : false}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%'
    },
    modalButton:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'

    }
  })