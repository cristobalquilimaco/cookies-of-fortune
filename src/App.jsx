import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import Phrases from './components/Phrases'
import phrases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'

const images = [1, 2, 3, 4]

function App() {

  const [phraseRandom, setPhraseRandom] = useState(getRandomArray(phrases))
  
  const [img, setImg] = useState(getRandomArray(images))

const appStyle = {
  backgroundImage: `url('/backgrounds/fondo${img}.jpg')`
}


  return (
    <div style={appStyle} className="App">
    <h1>GALLETAS DE LA FORTUNA</h1>
    <div className='phrases'>
      <Phrases phraseRandom={phraseRandom}/>
    </div>
    <i class='bx bxs-quote-alt-right'></i>
    <ButtonPhrase setPhraseRandom={setPhraseRandom} setImg={setImg} />
    </div>
  )
}

export default App
