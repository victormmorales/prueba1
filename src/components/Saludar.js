import React from "react";

export default function Saludar({ userInfo }) {
  console.log(userInfo);
  return (
    <div>
      <p>
        Hola {userInfo.nombre}, tiene {userInfo.edad} años. Su color favorito es{" "}
        {userInfo.color}
      </p>
    </div>
  );
}
