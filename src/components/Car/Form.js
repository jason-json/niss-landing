import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVersions: {}
    };
  }
  componentWillMount() {
    let versions = [...this.props.versions];
    let newState = versions.filter(v => v.selected === true);
    this.setState({ currentVersions: newState });
  }
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflow = "visible";
  }

  render() {
    let currentVersions = null;
    let versions = this.state.currentVersions;
    currentVersions = (
      <div className="popup_wrap_form_versions u-margin-bottom-medium">
        <h2>Versiones a cotizar</h2>
        {versions.map((version, index) => {
          return <p key={index}>{version.model}</p>;
        })}
      </div>
    );
    return (
      <div className="popup">
        <div className="popup_wrap">
          <div className="navigation">
            <button onClick={this.props.showHideForm}>⮪</button>
            <h3 className="navigation_item_popup_two">
              AGENCIA DATSUN SABANA:
              <a href="tel:+50622900505" target="_blank">+506 2290-0505</a>
            </h3>
          </div>
          <h1>DATOS DE CONTACTO</h1>
          <div className="row">
            <form action="sendMail.php" className="form"  method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="form__input"
                  placeholder="Nombre*"
                  required
                />
                <label for="nombre" className="form__label">
                  Nombre*
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  className="form__input"
                  placeholder="Apellidos*"
                  required
                />
                <label for="apellidos" className="form__label">
                  Apellidos*
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input"
                  placeholder="Correo electrónico*"
                  required
                />
                <label for="email" className="form__label">
                  Correo electrónico*
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  className="form__input"
                  placeholder="Teléfono*"
                  required
                />
                <label for="telefono" className="form__label">
                  Teléfono*
                </label>
              </div>
              {currentVersions}
              <h3>¿Necesita información adicional?</h3>
              <textarea
                name="info"
                id="info"
                cols="230"
                rows="3"
                className="form__input u-margin-bottom-small"
              />
              <input
                type="checkbox"
                name="autoriza"
                id="autoriza"
                value="autoriza"
                className="css-checkbox"
                required
              />
              <label htmlFor="autoriza" className="css-label" style={{textAlign: 'left !important'}}>
                Autorizo a Agencia Datsun en el envío de información de sus productos.
              </label>
              <a href="#" className="u-margin-bottom-small">Ver Política de Privacidad</a>
              <input type="submit" value="cotice >" className="btn u-margin-bottom-medium"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
