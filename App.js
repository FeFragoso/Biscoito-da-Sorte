import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({})

export default function App() {

  const [img, setImg] = useState(require('./assets/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    'A gratidão é a memória do coração.',
    'Deixe pra trás o que não te leva pra frente.',
    'Viver não é esperar a tempestade passar, é aprender a dançar na chuva.',
    'As crises não afastam os amigos. Apenas selecionam.',
    'O sorriso é a melhor resposta para um olhar.',
    'A vida é como andar de bicicleta. Para ter equilíbrio, você tem que se manter em movimento.',
    'Falta de tempo é desculpa daqueles que perdem tempo por falta de métodos.',
    'O primeiro dever da inteligência é desconfiar dela mesma.',
    'O único homem que está isento de erros, é aquele que não arrisca acertar.'
  ]

  function quebraBiscoito() {
    let x = Math.floor(Math.random() * frases.length)

    setTextoFrase('" '+frases[x]+' "')
    setImg(require('./assets/biscoitoAberto.png'))
  }

  function reiniciar() {

    setTextoFrase('')
    setImg(require('./assets/biscoito.png'))
  }

  return (

    <View style={s.container}>

      <Image
        source={img}
        style={s.img}
      />

      <Text style={s.frase}> {textoFrase} </Text>

      <View>

        <TouchableOpacity
          style={[s.btnQuebra, { marginBottom: 0 }]}
          onPress={ quebraBiscoito }
        >
          <Text style={s.btnTexto}>Quebrar Biscoito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[s.btnQuebra, { borderColor: '#121212' }]}
          onPress={ reiniciar }
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

    width: '17.5rem',

    margin: 0
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