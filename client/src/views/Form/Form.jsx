import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { postPokemon , getTypes } from '../../redux/actions';
import style from './Form.module.css'


export default function Form() {

  const dispatch = useDispatch();

  const  allTypes = useSelector(state => state.types);

  const [selected, setSelected] = useState("");
 


  const [form, setForm] = useState({
    name:"",
    image:"",
    hp:"",
    attack:"",
    defense:"",
    speed:"",
    height:"",
    weight:"",
    types:[],
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
      types: [],
    });
  };


  const handlepokemons = (event) => {
    if(event.target.value !== 'Select type' && !form.types.includes(event.target.value)){
        setForm({
            ...form,
            types:[...form.types, event.target.value]
        })
       
    }
}


 const deleteType = (event) => {
  setForm({
    ...form,
    types: form.types.filter((type) => type !== event.target.value)
})
 }
   
    
  return (
    <div className={style.form}>
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Ingrese datos: </h1>
        <label className={style.label} htmlFor="">Name</label>
        <input type="text" value={form.name} onChange={changeHandler} name="name" />
      </div>
      <div>
        <label className={style.label} htmlFor="">Image</label>
        <input type="text"  value={form.image}  onChange={changeHandler} name="image" />
      </div>
      <div>
        <label className={style.label} htmlFor="">Hp</label>
        <input type="text"  value={form.hp}  onChange={changeHandler} name="hp" />
      </div>
      <div>
        <label className={style.label} htmlFor="">Attack</label>
        <input type="text"  value={form.attack}  onChange={changeHandler} name="attack" />
      </div>
      <div>
        <label className={style.label} htmlFor="">Defense</label>
        <input type="text"  value={form.defense}  onChange={changeHandler} name="defense" />
      </div>
      <div>
        <label className={style.label} htmlFor="">Speed</label>
        <input type="text"   value={form.speed}  onChange={changeHandler} name="speed" />
      </div>
      <div>
        <label className={style.label} htmlFor="">Height</label>
        <input type="text"  value={form.height}  onChange={changeHandler} name="height" />
      </div>
      <div>
        <label className={style.label} htmlFor="">Weight</label>
        <input type="text"  value={form.weight}  onChange={changeHandler} name="weight" />
      </div>



      <select className={style.select} value={selected} onChange={event => [handlepokemons(event), setSelected(event)]}>
                <option>Select Type</option>
                {allTypes?.map(element => {
                    return(
                        <option key={element.name}>
                            {element.name}
                        </option>
                    )
                })}
            </select>
            <div>
                    {form.types.map((type) => {
                        return(
                            <div className='' key={type}>
                                <p>{type}</p>
                                <button className={style.butonclose} onClick={deleteType} value={type}> X </button>
                            </div>
                        )
                    })}
                </div>
{/* 
      <div>
        <label htmlFor="">Type</label>
        <input type="text"  value={form.types}  onChange={changeHandler} name="types" />
      </div> */}


      <button className={style.boton} type="submit">Crear Pokemon</button>
    </form>
    </div>
  )
}
