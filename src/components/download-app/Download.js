import "./Download.css"


function Download(props) {
  return (
    <div>
      <div className="download-app">
        <a className="download-app__link" href="#">
          <img className="download-app__img" src={props.img} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Download;
