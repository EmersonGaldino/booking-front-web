import React, { useState, useMemo } from "react";
import camera from "../../assets/camera.svg";
import "./styles.css";

export default function New() {
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function handleSubmit() {}
  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <input type="file" />
        <img
          src={camera}
          alt="Select img"
          onChange={event => setThumbnail(event.target.files[0])}
        />
      </label>

      <label htmlFor="company">Empresa *</label>
      <input
        type="text"
        id="company"
        value={company}
        placeholder="Sua empresa incrivel"
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
        Tecnologias * <span>Separados por virgula.</span>
      </label>
      <input
        type="text"
        id="company"
        value={techs}
        placeholder="Quais tecnologias usam?"
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="techs">
        Valor da diaria * <span>(Em branco para GRATUITO))</span>
      </label>
      <input
        type="text"
        id="price"
        value={price}
        placeholder="Valor cobrado por dia"
        onChange={event => setPrice(event.target.value)}
      />

      <button className="btn">Cadastrar</button>
    </form>
  );
}
