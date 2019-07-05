import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, FlatList} from 'react-native';


export default class App extends React.Component {

  constructor(props){
    const data = [{
      task:'Walk dog',
      date: new Date().toISOString()
    }];
    super(props);
    this.state ={
      text: 'Enter activity here',
      data: data,
      color: true,
      currNum: 0,
    }

  }
  updateText(){
    const newData = {
      task: this.state.text,
      date: new Date().toISOString()
    }
    this.setState({data:this.state.data.concat({key:this.state.currNum.toString(),newData})});
    this.state.currNum++;

  }
  removeText(item){
    index = this.state.data.indexOf(item)
    this.setState({data:this.state.data.slice(0,index).concat(this.state.data.slice(index+1,this.state.data.length))});
    console.log(this.state.data)
    this.setState({currNum:this.state.currNum--});
  }
  clearAll(){
    this.setState({data:[]})
  }

  render() {
    const [text, setText] = useState('')
    return (
      <View style={styles.container}>
        <Text></Text>
        <View style = {{flexDirection:'row',justifyContent:'flex-end'}}>
          <TextInput style = {{fontSize:30,borderColor:'black', flex:1, marginTop:20}} onChangeText = {() => setText(event.target.value)}value = {this.state.text}/>
          <TouchableOpacity style = {{marginTop:20}}onPress = {()=>(this.updateText())}>
            <Text>Add to list</Text>

          </TouchableOpacity>

        </View>

        <View style = {{flex:1, flexDirection:'row'}}>
            <FlatList
              data = {this.state.data}
              renderItem = {({item}) =>
              <View>
                <Text style={styles.text} >{item.task}</Text>
                <Text style={styles.text}>Added: {item.date}</Text>
                <TouchableOpacity onPress = {() => this.removeText(item)}>
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>}
              />
        </View>
        <View style = {{flexDirection:'row',justifyContent:'flex-end'}}>
          <TouchableOpacity onPress = {()=>this.clearAll()}>
            <Text>Clear all entries</Text>
          </TouchableOpacity>
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
