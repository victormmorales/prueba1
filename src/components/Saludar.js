import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  console.log(userInfo);
  console.log(saludarFn);

  return (
    <div>
      <button onClick={() => saludarFn(userInfo.nombre)}>Saludar</button>
    </div>
  );
}
