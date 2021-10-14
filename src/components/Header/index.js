import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

import api from '../../services/api';

function Header({ clickNotification}) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify (){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
      .then(response => {
        setLateCount(response.data.length)
      })
  }

  useEffect(() => {
    lateVerify();
  })

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
        <Link to='/qrcode'>SINCRONIZAR SMARTPHONE</Link>
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
