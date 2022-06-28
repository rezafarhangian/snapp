import "./Advantages.css"

function Advantages(props) {
  return (
    <div className="advantages">
        <div className="advantages__right">
            <img src={props.img} alt="" />
        </div>
         <div className="advantages__left">
            <h3 className="advantages__title">{props.title}</h3>
             <p className="advantages__text">{props.text}</p>
         </div>
    </div>
  )
}

export default Advantages