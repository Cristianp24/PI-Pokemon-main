import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import {
  filterCreated,
  getFilterPokemons,
  getPokemons,
  getTypes,
  orderAZ,
  orderAttack,
  resetPokemons,
} from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.pokemons);



  const handleFilterChange = (event) => {
    dispatch(filterCreated(event.target.value));
  };

  const allTypes = useSelector((state) => state.types);
  const [selectedAZ, setSelectedAZ] = useState("A-Z-A");
  const [selectedAttack, setSelectedAttack] = useState("Attack");

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  const handleOrderAZ = (e) => {
    e.preventDefault();
    setSelectedAZ(e.target.value);

    dispatch(orderAZ(e.target.value));
  };

  const handleFilterAttack = (e) => {
    e.preventDefault();

    setSelectedAttack(e.target.value);
    dispatch(orderAttack(e.target.value));
  };

  function handleFilterType(event) {
    if (event.target.value === "all") {
      event.preventDefault();
      dispatch(resetPokemons());
    } else {
      dispatch(getFilterPokemons(event.target.value));
    }

  }

  return (
    <div className="home-page">
      <select onChange={(e) => handleFilterChange(e)} className={style.select}>
        <option value="All">All</option>
        <option value="Created">DB</option>
        <option value="Existing">API</option>
      </select>

      <Cards pokemons={allPokemons} />

      <select
        onChange={(event) => handleFilterType(event)}
        className={style.types}
      >
        <option value="All">All</option>{" "}
        
        {allTypes.map((t) => {
          return (
            <option value={t.name} key={t.name}>
              {t.name[0].toUpperCase() + t.name.slice(1)}
            </option>
          );
        })}
      </select>
      <select
        id="order-filter"
        value={selectedAZ}
        onChange={handleOrderAZ}
        className={style.SelectOption}
      >
        <option value={selectedAZ} className={style.SelectOption}>
          {selectedAZ}
        </option>
        <option value="A-Z" className={style.SelectOption}>
          A-Z
        </option>
        <option value="Z-A" className={style.SelectOption}>
          Z-A
        </option>
      </select>
      <select
        id="order-filter"
        value={selectedAttack}
        onChange={handleFilterAttack}
        className={style.SelectOption}
      >
        <option value={selectedAttack} className={style.SelectOption}>
          {selectedAttack}
        </option>
        <option value="(+-) Attack" className={style.SelectOption}>
          (+-) Attack
        </option>
        <option value="(-+) Attack" className={style.SelectOption}>
          (-+) Attack
        </option>
      </select>
    </div>
  );
};

export default Home;
