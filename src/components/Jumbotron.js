import React from "react";
import Feature from "./Feature";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron ">
        <h1 className="display-4">App looks great!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          necessitatibus, quas voluptas beatae optio maxime cupiditate at fuga
          officiis odit rem provident nobis esse magni! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Assumenda velit dolorem
          repudiandae qui rerum possimus sit animi. Illo, laudantium ea!
        </p>
        <hr className="my-4" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          incidunt?
        </p>
        <a className="btn btn-success btn-lg" href="#" role="button">
          React is awesome
        </a>
      </div>
      <Feature />
    </div>
  );
}

export default Jumbotron;
