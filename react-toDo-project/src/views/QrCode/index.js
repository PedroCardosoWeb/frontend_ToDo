// import React, { useState, useEffect } from 'react';
import React, { useState} from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function SaveMac(){
        if(!mac)
            alert('Informe o número que apareceu no seu dispositivo')
        else {
        localStorage.setItem('@todo/macaddress', mac);
        setRedirect(true);
        window.location.assign("/");
        }
    }
    return (
        <S.Container>
            { redirect && <Redirect to="/" /> }
            <Header />
                <S.Content>
                    <h1>Capture o QR Code</h1>
                    <p>Suas atividades serão sincronizadas com o seu smartphone.</p>
                    <S.QrCodeArea>
                        <Qr value='getmacaddress' size={300} />
                    </S.QrCodeArea>
                </S.Content>

                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no seu smartphone</span>
                    <input type="text" onChange={e=> setMac(e.target.value)} value={mac} />
                    <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>

            <Footer />
        </S.Container>
    )
}

export default QrCode;