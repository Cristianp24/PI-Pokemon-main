
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getTypes } from "../../redux/actions";
import style from "./Form.module.css";
import validate from "./validate";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allTypes = useSelector((state) => state.types);

  const [selected, setSelected] = useState("");
  
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    const newErrors = validate({
      ...form,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: newErrors[name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(form);

    if (Object.keys(formErrors).length === 0 && form.types.length > 0) {
      dispatch(postPokemon(form));
      setForm({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      });
      alert("Pokemon creado exitosamente");
      navigate(`/home`);
    } else {
      setErrors(formErrors);
    }
  };

  const handlepokemons = (event) => {
    if (
      event.target.value !== "Select type" &&
      !form.types.includes(event.target.value)
    ) {
      setForm({
        ...form,
        types: [...form.types, event.target.value],
      });
    }
  };

  const deleteType = (event) => {
    setForm({
      ...form,
      types: form.types.filter((type) => type !== event.target.value),
    });
  };

  function navigateHandler() {
    navigate(`/home`);
  }


  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <button className={style.btnhome} onClick={navigateHandler}>
            Back home
          </button>
          <h1>Ingrese datos </h1>
          <label className={style.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
          />
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>
        <div>
          <label className={style.label} htmlFor="image">
            Image
          </label>
          <input
            type="text"
            value={form.image}
            onChange={changeHandler}
            name="image"
          />
          {errors.image && <p className={style.error}>{errors.image}</p>}
        </div>
        <div>
          <label className={style.label} htmlFor="hp">
            Hp
          </label>
          <input
            type="text"
            value={form.hp}
            onChange={changeHandler}
            name="hp"
            />
            {errors.hp && <p className={style.error}>{errors.hp}</p>}
          </div>
          <div>
            <label className={style.label} htmlFor="attack">
              Attack
            </label>
            <input
              type="text"
              value={form.attack}
              onChange={changeHandler}
              name="attack"
            />
            {errors.attack && <p className={style.error}>{errors.attack}</p>}
          </div>
          <div>
            <label className={style.label} htmlFor="defense">
              Defense
            </label>
            <input
              type="text"
              value={form.defense}
              onChange={changeHandler}
              name="defense"
            />
            {errors.defense && <p className={style.error}>{errors.defense}</p>}
          </div>
          <div>
            <label className={style.label} htmlFor="speed">
              Speed
            </label>
            <input
              type="text"
              value={form.speed}
              onChange={changeHandler}
              name="speed"
            />
            {errors.speed && <p className={style.error}>{errors.speed}</p>}
          </div>
          <div>
            <label className={style.label} htmlFor="height">
              Height
            </label>
            <input
              type="text"
              value={form.height}
              onChange={changeHandler}
              name="height"
            />
            {errors.height && <p className={style.error}>{errors.height}</p>}
          </div>
          <div>
            <label className={style.label} htmlFor="weight">
              Weight
            </label>
            <input
              type="text"
              value={form.weight}
              onChange={changeHandler}
              name="weight"
            />
            {errors.weight && <p className={style.error}>{errors.weight}</p>}
          </div>
  
          <select
            className={style.select}
            value={selected}
            onChange={(event) => [handlepokemons(event), setSelected(event)]}
          >
            <option>Select Type</option>
            {allTypes?.map((element) => {
              return <option key={element.name}>{element.name}</option>;
            })}
          </select>
          <div>
            {form.types.map((type) => {
              return (
                <div className="" key={type}>
                  <p>{type}</p>
                  <button
                    className={style.butonclose}
                    onClick={deleteType}
                    value={type}
                  >
                    {" "}
                    X{" "}
                  </button>
                </div>
              );
            })}
          </div>
  
          <button className={style.boton} type="submit">
            Crear Pokemon
          </button>
        </form>
      </div>
    );
  }
