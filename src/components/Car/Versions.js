import React, { Component } from "react";
import Form from "./Form";

class Versions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      versions: this.props.versions,
      numberSelected: 0,
      formVisible: false
    };
  }
  componentDidMount() {
    let countSelected = this.state.versions.filter(v => v.selected === true)
      .length;
    // console.log(countSelected);
    this.setState({ numberSelected: countSelected });
  }

  handleChangeCheckBox = event => {
    let newState = [...this.state.versions];
    let index = newState.findIndex(
      version => version.id === parseInt(event.target.name)
    );
    newState[index] = { ...newState[index], selected: event.target.checked };
    this.setState({ versions: newState });
    let countSelected = newState.filter(v => v.selected === true).length;
    this.setState({ numberSelected: countSelected });
  };

  showHideForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  render() {
    let models = null;
    models = (
      <div className="versions_section_wrap u-margin-bottom-medium">
        {this.state.versions.map((version, index) => {
          if (version.id !== "") {
            return (
              <div key={version.id}>
                {version.selected === true ? (
                  <input
                    type="checkbox"
                    name={version.id}
                    id={version.id}
                    onChange={this.handleChangeCheckBox}
                    value={version.model}
                    className="css-checkbox"
                    checked
                  />
                ) : (
                  <input
                    type="checkbox"
                    name={version.id}
                    id={version.id}
                    onChange={this.handleChangeCheckBox}
                    value={version.model}
                    className="css-checkbox"
                  />
                )}
                <label htmlFor={version.id} className="css-label">
                  {version.model}
                </label>
              </div>
            );
          } else return null;
        })}
      </div>
    );

    return (
      <div>
        <section className="versions_section u-margin-top-small">
          <h2 className="u-margin-bottom-small">Seleccione la Versión</h2>
          {models}
          <button
            className="btn u-margin-bottom-medium"
            onClick={this.showHideForm}
          >
            SOLICITAR COTIZACIÓN ({this.state.numberSelected}) >
          </button>
        </section>

        {this.state.formVisible ? (
          <Form
            showHideForm={this.showHideForm}
            versions={this.state.versions}
          />
        ) : null}
      </div>
    );
  }
}

export default Versions;
