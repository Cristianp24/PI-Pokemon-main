import React from "react";
import style from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate(`/home`);
  }

  return (
    <div className="landing-page">
      <button onClick={navigateHandler} className={style.btn}>
        Enjoy!
      </button>
      <img
        className={style.imagen}
        src="https://th.bing.com/th/id/R.6fd0ada60419a490759f689db9e51999?rik=FcoqT%2frVD8S5gQ&riu=http%3a%2f%2fs3.amazonaws.com%2frtvc-assets-senalradionica.gov.co%2fs3fs-public%2fsenalradionica%2farticulo-noticia%2fgaleriaimagen%2fpokemonfront.jpg&ehk=YEt%2bHE2IGWMTs9DUIrBgP9Eb%2fPXKMfzaa1bNd0urKD4%3d&risl=&pid=ImgRaw&r=0"
        alt="Imagen de fondo"
      />
    </div>
  );
};

export default Landing;
