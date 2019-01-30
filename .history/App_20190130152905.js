import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';

export default class App extends Component {
  state={
    placeHolder:"Enter the text for the input"
  }
  onTextChange=(event)=>{
    alert(event)
  }
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder=" enter text for inoput box "
        style={styles.placeInput}
        // value={this.state.placeHolder} 
        // onChangeText={this.onTextChange}
        />
         <Button title="Add" style={styles.buttonInput}
        color="green"
        />
        </View>
       
        <Text style={styles.title}>Developped by satej sarker</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26 ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color:"green",
  },
    
  inputContainer:{
    // flex:1,
    flexDirection: 'row',
    justifyContent:"space-between",

  },
  placeInput:{
    width:"70%"
  },
  buttonInput:{
    width:"30%"
  }
});
