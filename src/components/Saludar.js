import React from "react";

export default function Saludar({ name, edad }) {
  console.log(name);

  return (
    <div>
      <h2>
        Hola {name}, tiene {edad} años
      </h2>
    </div>
  );
}
