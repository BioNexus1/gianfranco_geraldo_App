import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import CustomModal from './components/Modal';
import AddItem from './components/AddItem';
import List from './components/List';


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
    setItemList(currentItems => [...currentItems, {id: Date.now()* Math.random(2), value: textItem}])
    setTextItem('');
  }
  const onHandlerCompleteItem = id => {
    let itemCompleted = itemList.find(item => item.id === id)
    itemCompleted.completed = true
    let itemListToSave = [...(itemList.filter((item)=> item.id !== id)), itemCompleted]
    setItemList(itemListToSave)
    console.log(itemListToSave)
    setModalVisible(!modalVisible)

  }
  return (
    <View style={styles.screen}>
      <CustomModal
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        onHandlerDeleteItem={onHandlerDeleteItem}
        onHandlerCompleteItem={onHandlerCompleteItem}
       />
      <AddItem
        textItem ={textItem}
        onHandlerAddItem= {onHandlerAddItem}
        onHandlerChangeItem ={onHandlerChangeItem}
      />
      <List 
        itemList ={itemList}
        onHandlerModal={onHandlerModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:30
  },
  
  
})
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
