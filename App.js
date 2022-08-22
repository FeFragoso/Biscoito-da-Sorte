import { useState } from 'react'
import { View, Text, Image } from 'react-native'
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

      <Text>" Teste de frase! "</Text>

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
    width: 300,
    heigth: 300
  }
})