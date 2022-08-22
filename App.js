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

      <View>

        <TouchableOpacity
          style={[s.btnQuebra, { marginBottom: 0 }]}
          onPress={ ()=> alert('Foi!') }
        >
          <Text style={s.btnTexto}>Quebrar Biscoito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.btnQuebra, { borderColor: '#121212' }]}
          onPress={ ()=> alert('Foi!') }
        >
          <Text style={[s.btnTexto, { color: '#121212' }]}>Reiniciar Biscoito</Text>
        </TouchableOpacity>

      </View>

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
  },
  btnQuebra: {
    margin: '1.5rem',
    padding: '0.75rem',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#dd7b22'
  },
  btnTexto: {
    fontSize: '1.5rem',
    fontWeight: 'bold',

    color: '#dd7b22'
  }
})