import React from "react";
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
    <div>
      <h1>Família:</h1>
      { childrenWithProps(props.children, props) }
    </div>
  );

  // Passando Propriedades para Componentes Filhos (Parte 2)