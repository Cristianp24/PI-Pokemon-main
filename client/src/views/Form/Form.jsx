import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { postPokemon , getTypes } from '../../redux/actions';


export default function Form() {

  const dispatch = useDispatch();


  const [form, setForm] = useState({
    name:"",
    image:"",
    hp:"",
    attack:"",
    defense:"",
    speed:"",
    height:"",
    weight:"",
    type:"",
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

   
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(form));
    // Reset form values
    setForm({
      name: '',
      image: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
      type: '',
    });
  };

    
    
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Ingrese datos: </h1>
        <label htmlFor="">Name</label>
        <input type="text" value={form.name} onChange={changeHandler} name="name" />
      </div>
      <div>
        <label htmlFor="">Image</label>
        <input type="text"  value={form.image}  onChange={changeHandler} name="image" />
      </div>
      <div>
        <label htmlFor="">Hp</label>
        <input type="text"  value={form.hp}  onChange={changeHandler} name="hp" />
      </div>
      <div>
        <label htmlFor="">Attack</label>
        <input type="text"  value={form.attack}  onChange={changeHandler} name="attack" />
      </div>
      <div>
        <label htmlFor="">Defense</label>
        <input type="text"  value={form.defense}  onChange={changeHandler} name="defense" />
      </div>
      <div>
        <label htmlFor="">Speed</label>
        <input type="text"   value={form.speed}  onChange={changeHandler} name="speed" />
      </div>
      <div>
        <label htmlFor="">Height</label>
        <input type="text"  value={form.height}  onChange={changeHandler} name="height" />
      </div>
      <div>
        <label htmlFor="">Weight</label>
        <input type="text"  value={form.weight}  onChange={changeHandler} name="weight" />
      </div>
      <div>
        <label htmlFor="">Type</label>
        <input type="text"  value={form.type}  onChange={changeHandler} name="type" />
      </div>
      <button type="submit">Crear Pokemon</button>
    </form>
  )
}
