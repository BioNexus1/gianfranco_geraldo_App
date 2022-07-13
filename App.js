import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState({});

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }



  const onHandlerChangeItem = (text) => setTextItem(text);
  const onHandlerAddItem = () => {
    setItemList(currentItems => [...currentItems, {id: Date.now(), value: textItem}])
    setTextItem('');
  }

  return (
    <View style={styles.screen}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.modalTitle}>
              <Text>
                Mi modal 
              </Text>

            </View>
            <View style={styles.modalMessage}>
              <Text>
                ¿Estas seguro de borrar?
              </Text>
            </View>
            <View style={styles.modalMessage}>
              <Text style={styles.modalItem}>
                {itemSelected.value}
              </Text>
            </View>
            <View style={styles.modalButton}>
              <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} ></Button>
            </View>
          </View>
        </View>
      </Modal>
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
      <View>
        <FlatList
          data={itemList}
          renderItem={data => (
            <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                <Text>Item Name: {data.item.value}</Text>
                <Text>ID: {data.item.id}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />


        {/* {
          itemList.map(item => 
            <View style={styles.item} key={item.id}>
              <Text>Item Name: {item.value}</Text>
              <Text>ID: {item.id}</Text>
            </View>
          )
        } */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:30
  },
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
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    height: 50,
    padding: 10,
    marginTop: '10%'
  },
  modalTitle:{
    backgroundColor:'#ccc',
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
    backgroundColor: 'White',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    padding: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  }
})
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
