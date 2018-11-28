import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, FlatList} from 'react-native';


export default class App extends React.Component {

  constructor(props){
    const data = [];
    super(props);
    this.state ={
      text: 'Enter activity here',
      data: data,
      color: true,
      currNum: 0,
    }

  }
  updateText(){
    this.setState({data:this.state.data.concat({key:this.state.currNum.toString(),task:this.state.text})});
    this.state.currNum++;

  }
  removeText(item){
    index = this.state.data.indexOf(item)
    this.setState({data:this.state.data.slice(0,index).concat(this.state.data.slice(index+1,this.state.data.length))});
    console.log(this.state.data)
    this.setState({currNum:this.state.currNum--});
  }


  render() {

    return (
      <View style={styles.container}>
        <Text></Text>
        <View style = {{flexDirection:'row',justifyContent:'flex-end'}}>
          <TextInput style = {{fontSize:30,borderColor:'black', flex:1, marginTop:20}} onChangeText = {(text) => this.setState({text})}value = {this.state.text}/>
          <TouchableOpacity style = {{marginTop:20}}onPress = {()=>(this.updateText())}>
            <Text>Add to list</Text>

          </TouchableOpacity>

        </View>

        <View style = {{flex:1, flexDirection:'row'}}>
            <FlatList
              data = {this.state.data}
              renderItem = {({item}) => <View><Text style={styles.text} >{item.task}</Text><TouchableOpacity onPress = {() => this.removeText(item)}><Text>Remove</Text></TouchableOpacity></View>}
              />

          </View>

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
  text: {
    fontSize:30
  }
});
