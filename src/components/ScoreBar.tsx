import { useEffect, useState } from "react"
import logo from "../../public/images/logo.svg"

const ScoreBar = () => {
  const [score, setScore] = useState<number>(0)

  useEffect(()=>{
    const storageScore = localStorage.getItem("score")
    if(storageScore){
        setScore(Number(storageScore))
    }else{
        localStorage.setItem("score", "0")
    }
  }, [])

  return (
    <div className='scoreBar'>
        <img src={logo} />
        <div className='score'>
            <span>SCORE</span>
            <div className='scoreNumber'>{score}</div>
        </div>
    </div>
  )
}

export default ScoreBar