import React from "react";
import { useForm } from "react-hook-form";

export default function FormReactHookForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
  };
  return (
    <>
      <div> Ejemplo de formulario de React Hook Form</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Codigo:
          <input type="text" name="codigo" {...register("codigo")} />
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" name="nombre" {...register("nombre")} />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="number"
            name="precio"
            {...register("precio", {
              min: { value: 0, message: "precio debe ser >0" },
              max: { value: 100, message: "precio debe ser <100" },
              required: "Precio es obligatorio",
            })}
            aria-invalid={errors.precio > 100 ? "true" : "false"}
          />
          {errors.precio && <p role="alert">{errors?.precio.message}</p>}
        </label>
        <br />
        <select {...register("categoria")}>
          <option value="electronico">electronico</option>
          <option value="informatica">informatica</option>
          <option value="otros">otros</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
