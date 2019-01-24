import React from 'react';

const Gracias = props => {
  let sended = props.match.params.sended;

  return (
    <div className="home">
      <div className="home_wrap">
      <h1>{sended === "true" ? "Gracias!": "Lo lamentamos! No se pudo enviar la informacion." }</h1>
      </div>
    </div>
  );
};

export default Gracias;