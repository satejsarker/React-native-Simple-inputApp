import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default class App extends Component {
  state={
    placeHolder:""
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput/>
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
