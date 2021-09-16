import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="logo" />
      </S.LeftSide>
      <S.RigthSide>
        <a href='#'>INÍCIO</a>
        <span className="divisor" />
        <a href='#'>NOVA TAREFA</a>
        <span className="divisor" />
        <a href='#'>SINCRONIZAR SMARTPHONE</a>
        <span className="divisor" />
        <a href='#' id='notification'>
          <img src={bell} alt="notificação" />
          <span>5</span>
        </a>
      </S.RigthSide>
    </S.Container>
  ) 
}

export default Header;
