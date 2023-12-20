import Dice from "./components/Dice.jsx";
import React from "react";
import {nanoid} from "nanoid"

const App = () => {
    const [dice,setDice] = React.useState(diceNumArray)
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const win = dice.every(die => {
            return die.value === dice[0].value && die.isHeld
        })
        setTenzies(win)
    },[dice])
    function diceNumArray(){
        const numArray= []
        for(let i =0;i<10;i++){
            numArray.push({
                value : Math.ceil(Math.random()*6),
                isHeld:false,
                id: nanoid()
            })
        }
        return numArray
    }
    const diceElement = dice.map(die=> {
        return <Dice
            handleClick={() => {
                toggleHold(die.id)
            }}
            value={die.value}
            isHeld={die.isHeld}
            key={die.id}
        />
    })
    function toggleHold(id){
        setDice(prevDice => {
            return prevDice.map(die => {
                if (die.id === id) {
                    return {...die, isHeld: !die.isHeld}
                }
                return die
            })
        })
    }
    function rollDice(){
        setDice((prevState) => {
            const tempArray = diceNumArray()
            return prevState.map((die, index) => {
                return die.isHeld ? {...die} : {...die, value: tempArray[index].value}
            })
        })
    }
    return (
        <main className={"main-section"}>
            <div className={"container"}>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current
                    value between rolls.</p>
                <div className={"dice-container"}>
                    {diceElement}
                </div>
                <button onClick={rollDice} className={"roll-btn"}>{tenzies?"Play Again":"Roll"}</button>
            </div>
        </main>
    );
};

export default App;