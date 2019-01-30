import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button

} from 'react-native';
import PlaceList from './src/components/placeList/PlaceList';
import PlaceInput from './src/components/placeInput/PlaceInput';

export default class App extends Component {
  state={
    placeName:"",
    places:[]
  }
 placeNmaeChange=val=>{
   this.setState({
     placeName:val
   })
 }
  placeSubmit=()=>{
    if(this.state.placeName.trim()===""){
      return
    }
    this.setState(prevState=>{
      return {
        places:prevState.places.concat(prevState.placeName)
      }
    })
  }
  render() {
   
    return (
      <View style={styles.container}>
      
        
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
    
 
  
});
 