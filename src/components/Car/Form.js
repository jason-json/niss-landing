import React, { Component } from "react";
import axios from "axios";
import { ReCaptcha } from "react-recaptcha-v3";
import { loadReCaptcha } from "react-recaptcha-v3";
import imgRecaptcha from "../../lib/img/icons/recaptcha_logo.png";
import backArrow from "../../lib/img/icons/back-arrow.png";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVersions: {},
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      info: "",
      authorize: false,
      sending: false,
      showMessage: false,
      colorAuthorizeMessage: "#000",
      recaptchaSuccess: false
    };
  }

  componentWillMount() {
    let versions = [...this.props.versions];
    let newState = versions.filter(v => v.selected === true);
    this.setState({ currentVersions: newState });
  }
  componentDidMount() {
    document.body.style.overflow = "hidden";
    loadReCaptcha("6LedS5IUAAAAAMkifeBBvyQj3_C58-RmytEGZmdz");
  }
  componentWillUnmount() {
    document.body.style.overflow = "visible";
  }

  handleHighlightEmptyValues = value => {
    if (value === "" && this.state.sending) {
      return "3px solid #ff7730";
    }
    return "none";
  };

  verifyCallback = recaptchaToken => {
    let respond = axios
      .post(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          secret: "6LedS5IUAAAAAMkifeBBvyQj3_C58-RmytEGZmdz",
          response: recaptchaToken
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          }
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log(recaptchaToken, "<= your recaptcha token");
  };

  hasEmptyValue = () => {
    const { nombre, apellidos, email, telefono } = this.state;
    const emptyValues = [nombre, apellidos, email, telefono].some(
      value => value === ""
    );
    if (emptyValues) {
      return true;
    }

    return false;
  };

  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  handleChangeCheckbox = event => {
    event.target.checked
      ? this.setState({ colorAuthorizeMessage: "#000" })
      : this.setState({ colorAuthorizeMessage: "#ff7730" });
    this.setState({ authorize: event.target.checked });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ sending: true });
    if (!this.hasEmptyValue() && this.state.authorize) {
      this.setState({ showMessage: false });
      axios
        .post("../sendMail.php", {
          nombre: this.state.nombre,
          apellidos: this.state.apellidos,
          email: this.state.email,
          telefono: this.state.email,
          info: this.state.info,
          versiones: this.state.versiones
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      if (this.state.authorize) {
        this.setState({ colorAuthorizeMessage: "#000", showMessage: true });
      } else {
        this.setState({ colorAuthorizeMessage: "#ff7730", showMessage: true });
      }
    }
  };

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

    let message = (
      <p style={{ color: "#ff7730" }}>
        Complete todos los campos obligatorios *
      </p>
    );

    return (
      <div className="popup">
        <div className="popup_wrap">
          <div className="navigation">
            <button onClick={this.props.showHideForm}>
              <img src={backArrow} alt="Atras" />
            </button>
            <h3 className="navigation_item_popup_two">
              AGENCIA DATSUN SABANA:
              <a href="tel:+50622900505" target="_blank">
                +506 2290-0505
              </a>
            </h3>
          </div>
          <h1>DATOS DE CONTACTO</h1>
          <div className="row">
            <form onSubmit={this.handleSubmit} className="form">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="form__input"
                  style={{
                    borderBottom: `${this.handleHighlightEmptyValues(
                      this.state.nombre
                    )}`
                  }}
                  placeholder="Nombre*"
                  onChange={this.handleChange}
                />
                <label htmlFor="nombre" className="form__label">
                  Nombre*
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  className="form__input"
                  style={{
                    borderBottom: `${this.handleHighlightEmptyValues(
                      this.state.apellidos
                    )}`
                  }}
                  placeholder="Apellidos*"
                  onChange={this.handleChange}
                />
                <label htmlFor="apellidos" className="form__label">
                  Apellidos*
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input"
                  style={{
                    borderBottom: `${this.handleHighlightEmptyValues(
                      this.state.email
                    )}`
                  }}
                  placeholder="Correo electrónico*"
                  onChange={this.handleChange}
                />
                <label htmlFor="email" className="form__label">
                  Correo electrónico*
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  className="form__input"
                  style={{
                    borderBottom: `${this.handleHighlightEmptyValues(
                      this.state.telefono
                    )}`
                  }}
                  placeholder="Teléfono*"
                  onChange={this.handleChange}
                />
                <label htmlFor="telefono" className="form__label">
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
                onChange={this.handleChange}
              />
              <input
                type="checkbox"
                name="authorize"
                id="authorize"
                value="authorize"
                className="css-checkbox"
                onChange={this.handleChangeCheckbox}
              />
              <label
                htmlFor="authorize"
                className="css-label"
                style={{
                  textAlign: "left !important",
                  color: this.state.colorAuthorizeMessage
                }}
              >
                Autorizo a Agencia Datsun en el envío de información de sus
                productos.*
              </label>
              <a href="#" className="u-margin-bottom-small">
                Ver Política de Privacidad
              </a>
              <div className="recaptcha-custom">
                <img src={imgRecaptcha} alt="Recaptcha" />
                <p>
                  Este sitio es protegido por reCAPTCHA y las{" "}
                  <a href="https://policies.google.com/privacy" target="_blank">
                    Políticas de Privacidad
                  </a>{" "}
                  y{" "}
                  <a href="https://policies.google.com/terms" target="_blank">
                    Términos de Servicio
                  </a>{" "}
                  de Google.
                </p>
              </div>
              {this.state.showMessage ? message : null}
              <br />

              <input
                type="submit"
                value="cotice >"
                className="btn u-margin-bottom-medium"
              />
              <ReCaptcha
                sitekey="6LedS5IUAAAAAMkifeBBvyQj3_C58-RmytEGZmdz"
                verifyCallback={this.verifyCallback}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
