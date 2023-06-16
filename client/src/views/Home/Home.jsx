import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, orderAZ, orderAttack } from '../../redux/actions';
import Pagination from '../../components/Pagination/Pagination';
import style from './Home.module.css' 

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector(state => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);


  
  const [selectedAZ, setSelectedAZ] = useState("A-Z-A")
  const [selectedAttack, setSelectedAttack] = useState("Attack")


  const handleOrderAZ = (e) => {

    e.preventDefault()
    setSelectedAZ(e.target.value)
    
  dispatch(orderAZ(e.target.value))
}

const handleFilterAttack = (e) => {
  e.preventDefault()

  setSelectedAttack(e.target.value)
  dispatch(orderAttack(e.target.value))
}






  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  // Obtenemos el índice del último y primer pokemon de la página actual
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  // Obtenemos los pokemons de la página actual
  const pokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // Cambiar de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home-page">
      <Cards pokemons={pokemons} />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={allPokemons.length}
        currentPage={currentPage}
        paginate={paginate}
        
      />
 
       <select
                id="order-filter"
                value={selectedAZ}
                onChange={handleOrderAZ}
                className={style.SelectOption}
              >
                <option value={selectedAZ} className={style.SelectOption}>{selectedAZ}</option>
                <option value="A-Z" className={style.SelectOption}>A-Z</option>
                <option value="Z-A" className={style.SelectOption}>Z-A</option>
              </select>
              <select
                id="order-filter"
                value={selectedAttack}
                onChange={handleFilterAttack}
                className={style.SelectOption}
              >
                <option value={selectedAttack} className={style.SelectOption}>{selectedAttack}</option>
                <option value="(+-) Attack" className={style.SelectOption}>(+-) Attack</option>
                <option value="(-+) Attack" className={style.SelectOption}>(-+) Attack</option>
              </select>
              
    </div>
  );
};



export default Home;


