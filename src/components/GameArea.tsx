import RPSButton from "./RPSButton"
import rock from "../../public/images/icon-rock.svg"
import paper from "../../public/images/icon-paper.svg"
import scissors from "../../public/images/icon-scissors.svg"
import { useEffect, useState } from "react"

type ChoicesType = "rock"|"paper"|"scissors"

const GameArea = () => {
  const [picked, setPicked] = useState<ChoicesType>()
  const choices:ChoicesType[] = ["paper","rock","scissors"]
  const pickMove = (move: ChoicesType) => {
    setPicked(move)
  }

  useEffect(()=>{
    if(picked){
        setTimeout(()=>{
            const machineMove = choices[Math.floor(Math.random() * 3)]
            alert(machineMove)
        },2000)
    }
  },[picked])

  return (
    <>
        {picked === undefined &&
        <div className="pickArea">
            <RPSButton icon={rock} color="red" pickMove={()=>pickMove("rock")}/>
            <RPSButton icon={paper} color="blue" pickMove={()=>pickMove("paper")}/>
            <RPSButton icon={scissors} color="gold" pickMove={()=>pickMove("scissors")}/>
        </div>}
        {
            picked !== undefined &&
            <>
            {picked === "paper" && <RPSButton icon={paper} color="blue" pickMove={()=>{}}/>}
            {picked === "rock" && <RPSButton icon={rock} color="red" pickMove={()=>{}}/>}
            {picked === "scissors" && <RPSButton icon={scissors} color="gold" pickMove={()=>{}}/>}
            </>
        }
    </>
  )
}

export default GameArea