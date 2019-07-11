import React, {Component} from 'react';

import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Keyboard} from 'react-native';
import { compose } from 'react-apollo'
import { Api } from '../lib/api'



class MyListItem extends Component {
  render() {
    return (
        <View>
          <Text style={styles.todoItem}>
            {this.props.title}
          </Text>
        </View>
    );
  }
}

class MainScreen extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  }
  
  state = { name: '' }
  onChange = (e) => { this.setState({ name: e.target.value }) }
  // addTodo = () => this.props.createTodo({ name: this.state.name })
  addTodo = () => {
    if(!this.state.name) return;
    this.refs.TodoTextInput.clear()
    Keyboard.dismiss()

    this.props.createTodo({input:{ name: this.state.name, description: null }}).then((e) => {
      this.state.name = ''
      this.refs.TodoTextInput.focus()
    })
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      title={item.name}
    />
  );

  render() {
    console.log('mainScreen called')
    return (
      <View style={styles.container}>
        <View style={{
          marginTop:40,
          flexDirection: 'row',
          height:100,
          width:'100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TextInput
            ref="TodoTextInput"
            style={{height:40,fontSize:20,width:200,borderBottomWidth:1,textAlign:"center"}}
            placeholder="Type to here"
            onChangeText={(text) => this.setState({name:text})}
            onSubmitEditing={this.addTodo}
            autoFocus
            keyboardType='default'
          />
          <Button
            onPress={this.addTodo}
            title="Add Todo"
            color="#841584"
          />
        </View>
        
        <ScrollView style={{
          width:'100%',
          backgroundColor:'#ffffff'
        }}>
          <FlatList
            data={this.props.todos}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            inverted
          />
        </ScrollView>
      </View>
    );
  }
}

export default compose(
  Api.Todo.queries.listTodos(),
  Api.Todo.mutations.createTodo()
)(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  todoItem: {
    fontSize: 18,
    textAlign: 'left',
    margin: 15,
    width:200,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
