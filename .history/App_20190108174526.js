import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default class App extends Component {
  state={
    placeHolder:""
  }
  onTextChange=val=>{
    // alert(event)
    this.setState({
    placeHolder:val
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={{width:300, borderColor: "black",borderWidth:1}}
        value={this.state.placeHolder} 
        onChangeText={this.onTextChange}
        />
        <Text style={styles.title}>Developped by satej</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color:"green",
  },
    
  
});
