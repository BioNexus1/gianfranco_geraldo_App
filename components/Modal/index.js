import {Modal, View, Text, StyleSheet, Button} from 'react-native'

export default function CustomModal(props){
    const { modalVisible, itemSelected, onHandlerDeleteItem, onHandlerCompleteItem} = props
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.modal}>
            <View style={styles.modalView}>
                <View style={styles.modalTitle}>
                <Text>
                    Eliminar Item
                </Text>

                </View>
                <View style={styles.modalMessage}>
                <Text>
                    ¿Estas seguro de continuar?
                </Text>
                </View>
                <View style={styles.modalMessage}>
                <Text style={styles.modalItem}>
                    {itemSelected.value}
                </Text>
                </View>
                <View style={styles.modalButton}>
                <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Eliminar'></Button>
                <Button onPress={() => onHandlerCompleteItem(itemSelected.id)} title='Completar'></Button>
                </View>
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalTitle:{
      backgroundColor:'#fff',
      color:'white',
      fontSize: 18
    },
    modalMessage:{
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalButton:{
      marginTop: 15
    },
    modalItem:{
      fontSize: 30
    },
    modal:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
  
    },
    modalView:{
      backgroundColor: 'white',
      width: '80%',
      height: '50%',
      borderRadius: 10,
      padding: '10%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column'
    }
  })