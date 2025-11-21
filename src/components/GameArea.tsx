import RPSButton from "./RPSButton"
import rock from "../../public/images/icon-rock.svg"
import paper from "../../public/images/icon-paper.svg"
import scissors from "../../public/images/icon-scissors.svg"

const GameArea = () => {
  return (
    <div>
        <RPSButton icon={rock} color="red"/>
        <RPSButton icon={paper} color="blue"/>
        <RPSButton icon={scissors} color="gold"/>
    </div>
  )
}

export default GameArea