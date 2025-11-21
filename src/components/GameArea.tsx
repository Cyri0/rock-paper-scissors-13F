import RPSButton from "./RPSButton"
import rock from "../../public/images/icon-rock.svg"
import paper from "../../public/images/icon-paper.svg"
import scissors from "../../public/images/icon-scissors.svg"
import { useEffect, useState } from "react"

type ChoicesType = "rock"|"paper"|"scissors"

const GameArea = () => {
  const [picked, setPicked] = useState<ChoicesType>()
  const [machinePicked, setMachinePicked] = useState<ChoicesType>()
  const choices:ChoicesType[] = ["paper","rock","scissors"]
  const [result, setResult] = useState<"player"|"machine"|"tie">()

  const pickMove = (move: ChoicesType) => {
    setPicked(move)
  }

  useEffect(()=>{
    if(picked){
        setTimeout(()=>{
            const machineMove = choices[Math.floor(Math.random() * 3)]
            setMachinePicked(machineMove)
        },500)
    }
  },[picked])

  useEffect(()=>{
    if(picked && machinePicked){
        if(picked === machinePicked) setResult("tie")
        else if(picked === "paper" && machinePicked === "rock") setResult("player")
        else if(picked === "paper" && machinePicked === "scissors") setResult("machine")

        else if(picked === "rock" && machinePicked == "paper") setResult("machine")
        else if(picked === "rock" && machinePicked == "scissors") setResult("player")

        else if(picked === "scissors" && machinePicked == "rock") setResult("machine")
        else if(picked === "scissors" && machinePicked == "paper") setResult("player")
    }
  },[picked, machinePicked])

  useEffect(()=>{
    if(result === "player"){
        const prev = Number(localStorage.getItem("score"))
        localStorage.setItem("score", String(prev + 1))
    }
  },[result])

  return (
    <>
        {picked === undefined &&
        <div className="pickArea">
            <RPSButton icon={rock} color="red" pickMove={()=>pickMove("rock")}/>
            <RPSButton icon={paper} color="blue" pickMove={()=>pickMove("paper")}/>
            <RPSButton icon={scissors} color="gold" pickMove={()=>pickMove("scissors")}/>
        </div>}
        <div className="resultArea">
        {
            picked !== undefined &&
            <>
            {picked === "paper" && <RPSButton icon={paper} color="blue" pickMove={()=>{}}/>}
            {picked === "rock" && <RPSButton icon={rock} color="red" pickMove={()=>{}}/>}
            {picked === "scissors" && <RPSButton icon={scissors} color="gold" pickMove={()=>{}}/>}
            </>
        }
        <h1 style={{color: "white"}}>
            {result === "machine" && "YOU LOSE!"}
            {result === "player" && "YOU WIN!"}
            {result === "tie" && "TIE"}
        </h1>
        {
            machinePicked !== undefined &&
            <>
            {machinePicked === "paper" && <RPSButton icon={paper} color="blue" pickMove={()=>{}}/>}
            {machinePicked === "rock" && <RPSButton icon={rock} color="red" pickMove={()=>{}}/>}
            {machinePicked === "scissors" && <RPSButton icon={scissors} color="gold" pickMove={()=>{}}/>}
            </>
        }
        </div>
        <div className="resultArea">
        {
            result && <button className="newGameBtn" onClick={()=>{window.location.reload()}}>NEW GAME</button>
        }
        </div>
    </>
  )
}

export default GameArea