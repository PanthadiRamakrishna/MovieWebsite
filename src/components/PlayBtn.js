import React,{useState} from "react";
import "./PlayBtn.css";
import Model from "./Model";

function PlayBtn({ movie }) {
  const [model,setModel] = useState(false)

  const toggleModel = ()=>{
    setModel(!model);
  }

  return (
    <>
      <div 
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? "active" : undefined
        }`}
      >
        <button type="button" href="" className="playBtn"  onClick={toggleModel}>
          <ion-icon name="play-outline"></ion-icon>
        </button>
        <p>Watch Trailer</p>
      </div>
      {movie.active && <Model movie={movie} status={model} toggleModel={toggleModel} />}


    </>
  );
}

export default PlayBtn;
