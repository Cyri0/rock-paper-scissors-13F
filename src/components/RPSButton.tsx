
const RPSButton = (props: {color: string, icon: string}) => {
  return (
    <div 
        className="RPS-btn"
        style={{ 
            borderColor: `var(--${props.color})`,
            boxShadow: `0px 10px 0px var(--${props.color}-shade)`
        }}
    >
        <img src={props.icon} />
    </div>
  )
}

export default RPSButton