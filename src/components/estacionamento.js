import * as React from 'react';
import {
    Link
  } from "react-router-dom";

export default function Estacionamento() {
    return (
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-estacionamento">List</Link>
            </li>
            <li>
              <Link to="/Add">Add</Link>
            </li>
          </ul>
        </nav>
        </div>
    );
  }
  