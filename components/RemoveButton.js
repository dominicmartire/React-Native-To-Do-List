import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
export default class RemoveButton extends React.Component{
    render(){
        return(
            <View style = {this.props.style}>

                <TouchableOpacity  onPress = {()=>this.removeText(this.props.value)} >
                    <Text>
                    Remove
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}