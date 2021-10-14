import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';

//Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    return (
        <S.Container>
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
                    <input type="text" />
                    <button type="button">Sincronizar</button>
                </S.ValidationCode>

            <Footer />
        </S.Container>
    )
}

export default QrCode;