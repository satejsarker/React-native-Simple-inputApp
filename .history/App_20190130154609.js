import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button

} from 'react-native';

export default class App extends Component {
  state={
    placeHolder:"Enter the text for the input",
    places:[]
  }
  onTextChange=(event)=>{
    alert(event)
  }
  placeSubmit=()=>{
    if(this.state.placeHolder.trim()===""){
      return
    }
    this.setState(prevState=>{
      return {
        places:prevState.places.concat(prevState.places)
      }
    })
  }
  render() {
    const placesOut= this.state.places.map(place=>(
      <Text>{place}</Text>
    ));
    return (
      <View style={styles.container}>
      
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder=" enter text for inoput box "
        style={styles.placeInput}
        // value={this.state.placeHolder} 
        // onChangeText={this.onTextChange}
        />
         <Button title="Add" style={styles.buttonInput} onPress={this.placeSubmit}
        color="green"
        />
        </View>

        <View>
       {placesOut}
        </View>
       
        <Text style={styles.title}>Developped by satej sarker!</Text>
        
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
    width:"100%",
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"center"

  },
  placeInput:{
    width:"70%"
  },
  buttonInput:{
    width:"30%"
  }
});
