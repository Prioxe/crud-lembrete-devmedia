import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';



export default class App extends Component {

  state = {
    lembretes: []
  }

  componentDidMount() {
    fetch('https://deviup.com.br:3001/api/lembrete', { method: 'GET' })
      .then(T => T.json())
      .then(lembretes => this.setState({ lembretes }))
  }


  render() {

    const { lembretes } = this.state


    return (
      <View >
          <Text>Lembrete</Text>
          <Button title='Adicionar' onPress={() => console.log('Criou o lembrete')} />
          <View>
            {lembretes.map((lembrete, key) => (
              <View key={key}>
                <Text>{lembrete.conteudo}</Text>
                <Button title='Editar' onPress={() => console.log('editou')} />
                <Button title='Excluir' onPress={() => console.log('excluiu')} />
              </View>  
            ))}
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

