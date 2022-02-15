import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from './Styles/stylesMain';
import { StyleSheet, Text, TextInput, Button, View,Image, FlatList, Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [textInput, setTextInput] = useState("")
  const [priceInput,setPriceInput]= useState("")
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  

  const handleChangeTextTitle = (text) => {setTextInput(text)}
  const handleChangeTextPrice = (text) => {setPriceInput(text)}

  const handleOnPress = () => {
    setTextInput('')
    setPriceInput('')
    
      setItemList([
        ...itemList,
        {
          title: textInput,
          price:priceInput,
          id: Math.random().toString(),
        },
      ])
    }
    
  

  const handleOnDelete = (item) => () => {
    setModalVisible(true)
    setItemSelected(item)
    console.log(item);
  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }
  const handleCancelDelete=()=>{
    setModalVisible(false)
  }

  return (
    <View >
      <View style={styles.header}> 
        <Text style={styles.headerText}>Agregar Productos</Text> 
      </View>
      <View style={styles.container}>
        {/* Input add Items */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={handleChangeTextTitle}
          placeholder="Nombre del producto"
        />
        <TextInput
          style={styles.input}
          value={priceInput}
          onChangeText={handleChangeTextPrice}
          placeholder="Precio"
        />
        
        <Button
          onPress={handleOnPress}
          title="Add"
        />
      </View>
      
      {/* Items List */}
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={styles.tinyLogo}
                source={{uri: 'https://okdiario.com/img/2021/11/26/fecha-final-chocolate.jpg',}}
              />
              <View>
                <Text>{item.title}</Text>
                <Text>$ {item.price}</Text>
              </View>
              <TouchableOpacity style={styles.btnAdd} onPress={handleOnDelete(item)}>
                <Text >x</Text>
              </TouchableOpacity>
            </View>
          )
        }
        keyExtractor={item => item.id}
      />
      {/* Modarl Items Delete */}
      <Modal animationType='slide' visible={modalVisible} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View>
              <Text>¿Está seguro que desea eliminar?</Text>
              <Text>{itemSelected.title}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.modalTouchable} onPress={handleConfirmDelete}>
                <Text>Elininar?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalTouchable} onPress={handleCancelDelete}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>            
            
          </View>
          
        </View>
      </Modal>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}


