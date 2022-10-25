import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header({ clickNotification}) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify (){
    await api.get(`/task/filter/late/${isConnected}`)
      .then(response => {
        setLateCount(response.data.length)
      })
  }

  useEffect(() => {
    lateVerify();
  })

  async function Logout(){
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="logo" />
      </S.LeftSide>
      <S.RigthSide>
      <Link to='/'>INÍCIO</Link>
        <span className="divisor" />
        <Link to='/task'>NOVA TAREFA</Link>
        <span className="divisor" />
        { !isConnected ?
          <Link to='/qrcode'>SINCRONIZAR SMARTPHONE</Link>
          :
          <button type="button" onClick={Logout}>SAIR</button> 
        }
        {
          lateCount &&
          <>
            <span className="divisor" />
            <button onClick={clickNotification} id='notification'>
              <img src={bell} alt="notificação" />
              <span>{lateCount}</span>
            </button>
          </>
        }
      </S.RigthSide>
    </S.Container>
  ) 
}

export default Header;
