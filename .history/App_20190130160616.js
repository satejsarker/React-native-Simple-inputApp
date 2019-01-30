import React,{Component} from 'react';
import { StyleSheet, Text, View , TextInput, Button

} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

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
    const placesOut= this.state.places.reverse().map((place,i)=>(
     <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
      
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder=" enter text for inoput box "
        style={styles.placeInput}
        value={this.state.placeName} 
        onChangeText={this.placeNmaeChange}
        />
         <Button title="Add" style={styles.buttonInput} onPress={this.placeSubmit}
        color="green"
        />
        </View>

        <View style={styles.listContainer}>
       {placesOut}
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
  listContainer:{
    width:"100%",
    padding:10,
    margin:5
  }
});
