import getRandomArray from "../utils/getRandomArray"
import phrase from "../utils/phrases.json"



const ButtomPhrase = ({ setPhraseRandom, setImg }) => {

    const changePhrase = () => {
        setPhraseRandom(getRandomArray(phrase))
        setImg(getRandomArray([1, 2, 3, 4]))
    }

    return (
    <button onClick={changePhrase}>Frase del día</button>
    )
}

export default ButtomPhrase