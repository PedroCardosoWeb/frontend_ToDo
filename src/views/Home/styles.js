import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    margin: 20px 0px;

    button {
        background: none;
        border: none;
    }
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content: center;
    margin-top: -40px;
    margin-bottom: 20px;

    h2 {
        background: #FFF;
        color: #20295F;
        position: relative;
        top: 33px;
        padding: 0 20px;
    }


`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;


`