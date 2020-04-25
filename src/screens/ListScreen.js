import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback} from 'react-native';

class ListScreen extends React.Component {

  handler = (event,item)=>{
    console.log(item);
  }

  render() {
    const friends = [
      {name: 'Friend #1'},
      {name: 'Friend #2'},
      {name: 'Friend #3'},
      {name: 'Friend #4'},
      {name: 'Friend #5'},
      {name: 'Friend #6'},
      {name: 'Friend #7'},
      {name: 'Friend #8'},
      {name: 'Friend #9'},
      {name: 'Friend #10'},
      {name: 'Friend #11'},
      {name: 'Friend #12'},
      {name: 'Friend #13'},
      {name: 'Friend #14'},
      {name: 'Friend #15'},
      {name: 'Friend #16'},
      {name: 'Friend #17'},
      {name: 'Friend #18'}
    ];

    return (
      <FlatList
        showsHorizontalScrollIndicator={true}
        keyExtractor={(friend)=>friend.name}
        data={friends}
        renderItem={({item}) => {
          return <TouchableWithoutFeedback onPress={(event)=>this.handler(event,item)} >
            <View>
            <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:20
    }
});

export default ListScreen;
