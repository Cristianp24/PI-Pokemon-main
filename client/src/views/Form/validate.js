

export default function validate(form) {
  const errors = {};

  if (form.name.trim() === '') {
    errors.name = 'Nombre es obligatorio';
  }

  if (form.image.trim() === '') {
    errors.image = 'Imagen es obligatoria';
  }
  if (form.hp < 0 || form.hp > 100) {
    errors.hp = 'Hp entre 0 y 100';
  }
  if (form.attack < 0 || form.attack > 100) {
    errors.attack = 'Ataque entre 0 y 100';
  }
  if (form.defense < 0 || form.defense > 100) {
    errors.defense = 'Defensa entre 0 y 100';
  }
  if (form.speed < 0 || form.speed > 100) {
    errors.speed = 'Velocidad entre 0 y 100';
  }
  if (form.height < 0 || form.height > 100) {
    errors.height = 'Altura entre 0 y 100';
  }
  if (form.weight < 0 || form.weight > 1000) {
    errors.weight = 'Peso entre 0 y 1000';
  }
  if (form.types.length === 0) {
    errors.types = 'Seleccione tipo de pokemon';
  }



  // Agrega más validaciones según tus necesidades, por ejemplo, para los demás campos.

  return errors;
}