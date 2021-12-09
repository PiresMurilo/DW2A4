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
button {
    width: 150px;
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