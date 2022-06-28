import "./Features.css"

function Features(props) {
  return (
    <div>
          <div className="features">
            <img className="features__img" src={props.img} alt="" />
            <h3 className="features__title">{props.title}</h3>
            <p className="features__text">{props.text}</p>
          </div>
    </div>
  )
}

export default Features