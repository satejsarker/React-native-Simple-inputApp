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
        <TextInput 
        placeholder=" enter text for inoput box "
        style={{width:300, borderColor: "black",borderWidth:1}}
        // value={this.state.placeHolder} 
        // onChangeText={this.onTextChange}
        />
        <Button title="Add"
        color="black"
        />
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
    
  
});
