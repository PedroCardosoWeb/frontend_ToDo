import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    heigth: 110px;
    background: #20295F;
    border-bottom: 5px solid #EE6B26;   
    display: flex;
`

export const RigthSide = styled.div`
    width: 50%;
    heigth: 110px;
    background: #20295F;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
        color: #FFF;
        font-weigth: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
            color: #EE6B26;
        }
    }
    
    #notification {
        img {
            width: 25px;
            heigth: 30px;
        }

        span{
            background: #FFF;
            color: #EE6B26;
            padding: 5px 7px;
            border-radius: 50%;
        }

        &:hover {
            opacity: 0.5;
        }

        .divisor::after{
            content: "|";
            margin: 0 10px;
            color: #FFF;
        }
    }
`

export const LeftSide = styled.div`
    width: 50%;
    heigth: 110px;
    background: #20295F;
    display: flex;
    align-items: center;
    padding-left: 10px;
    img {
        width: 100px;
        heigth: 100px;
        padding: 10px;
    }
`
