  import React, { Component } from 'react';
  import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';



  export default class App extends Component {
    render() {
      return (
        <View >
          <Text>Lembre</Text>
          <Button title='Adicionar' onPress={() => console.log('Criou o lembrete')} />
          <View>
            <View>
              <Text>Lembrete 1</Text>
              <Button title='Editar' onPress={() => console.log('Editou')} />
              <Button title='Excluir' onPress={() => console.log('Excluiu')} />
            </View>
            <View>
              
              <Text>Lembrete 2</Text>
              <Button title='Editar' onPress={() => console.log('Editou')} />
              <Button title='Excluir' onPress={() => console.log('Excluiu')} />
            </View>
          </View>
        </View>
      )
    }
  }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

