import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({})

export default function App() {

  const [img, setImg] = useState(require('./assets/biscoito.png'))

  return (

    <View style={s.container}>

      <Image
        source={img}
        style={s.img}
      />

      <Text style={s.frase}>" Teste de frase! "</Text>

      <TouchableOpacity
        style={s.btnQuebra}
        onPress={ ()=> alert('Foi!') }
      >
        <Text>Quebrar Biscoito</Text>
      </TouchableOpacity>

    </View>

  )
}

const s = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: '17.5rem'
  },
  frase: {
    margin: '1rem',

    fontSize: '1rem',
    fontStyle: 'italic',
    textAlign: 'center',

    color: '#dd7b22'
  }
})