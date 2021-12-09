import styled from 'styled-components';

export const Container = styled.div`
    background: #090A0B;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Parts = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 250px;
    border-right: 1px solid #3C4043;
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;