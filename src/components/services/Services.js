import "./Services.css"


function Services(props) {
  return (
    <div>
    <div>
        
        <div className="servisec">
            <img className="servisec__img" src={props.img} alt="" />
               <div className="servisec__wrapper">
              <h3 className="servisec__name">{props.name}</h3>
              <p className="servisec__text">{props.text}</p>
               </div>
        </div>
    </div>
    </div>
  )
}

export default Services