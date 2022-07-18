import { FlatList, View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function List(props){
    const {itemList, onHandlerModal} = props
    return (
        <View>
            <FlatList
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text style= {{ backgroundColor: data.item.completed ? 'green' : 'white' }}>Item Name: {data.item.value}</Text>
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
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        height: 50,
        padding: 10,
        marginTop: '10%',

    }
})