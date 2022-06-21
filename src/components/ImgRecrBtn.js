import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "../App.css";
class Imgrecrbtn extends Component {
  render() {
    let { img_url, img_label, pglocation } = this.props;
    return (
      <div className="recDiv">
        <Link
          className="recrlabel"
          to={{ pathname: `/${this.props.pglocation}` }}
        >
          <button className="recrbtn">
            <img className="btnImg1" src={img_url} />
          </button>
          <h4 className="pt-2 recrtitle">{img_label}</h4>
        </Link>
      </div>
    );
  }
}

export default Imgrecrbtn;
