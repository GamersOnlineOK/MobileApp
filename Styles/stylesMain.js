import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingHorizontal:20
    },
    header:{
      backgroundColor:'#96DEFB',
      paddingTop:20,
      paddingVertical:10,
      marginBottom:10,      
    },
    headerText:{
      color:'#496D7A',
      textTransform:'uppercase',
      fontSize:20,
      textAlign:'center',
    },
    inputContainer: {
      flexDirection: 'row',
    },
    input: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      flex: 1,
      marginRight: 20,
    },
    item: {
      padding: 20,
      marginVertical: 20,
      borderColor: 'black',
      borderWidth: 1, 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    btnAdd:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:30,
        backgroundColor:'#ff2200',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },
    tinyLogo:{
      width: 70,
      height: 70,
    },
    modal:{
      flex:1,
      justifyContent:'center',
      marginHorizontal:20,
    },
    modalContent:{
      borderRadius:10,
      padding:20,
      alignItems:'center',
      backgroundColor:'rgb(238, 190, 154)'
    },
    modalTouchable:{
      padding:10,
      borderRadius:10,      
      backgroundColor:'rgb(176, 127, 93)',
      color: '#f44336',
    }
  });
  export default styles;