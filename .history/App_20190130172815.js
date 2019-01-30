import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button

} from 'react-native';
import PlaceList from './src/components/placeList/PlaceList';
import PlaceInput from './src/components/placeInput/PlaceInput';


export default class App extends Component {
  
  render() {
   
    return (
      <View style={styles.container}>
      
        {/* <View style={styles.inputContainer}>
        <TextInput 
        placeholder=" enter text for inoput box "
        style={styles.placeInput}
        value={this.state.placeName} 
        onChangeText={this.placeNmaeChange}
        />
         <Button title="Add" style={styles.buttonInput} onPress={this.placeSubmit}
        color="green"
        />
        </View> */}

<PlaceInput />

        <PlaceList places={this.state.places}/>
       
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
  },
  
});
 