import styled from 'styled-components';

export const Container = styled.div`
p {
    font-size: 16px;
    color: #F0EDED;
}
h1 {
    margin: 0;
    padding: 0;
    color: #ED145B;
    font-size: 26px;
}
hr {
    height: 1px;
    border: 0;
    background-color: #ACC1CC;
    margin: 30px 0;
}
label {
    font-size: 15px;
    font-weight: bold;
    input {
        display: block;
        margin-top: 7px;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 10px;
        border: 1px solid #ED145B;
        border-radius: 4px;
        color: #FFF;
        outline: 0;
        font-size: 15px;
        background-color: #090A0B;
        margin-bottom: 10px;
    }
}
button {
    width: 200px;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #ED145B;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &: hover{
        filter: brightness(1.2);
    }
}
.backButton {
    font-size: 16px;
    text-decoration:none;
    padding: 20px 40px;
    color: #ACC1CC;
}
`;