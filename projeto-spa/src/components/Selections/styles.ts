import styled from 'styled-components';

export const Container = styled.div<{selected: boolean;}>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#ED145B' : '#ACC1CC'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid #ED145B;
    }
`;

export const Icon = styled.div`
    width: 82px;
    height: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const Local = styled.div`
    font-size: 14px;
    color: #F0EDED;
`;

export const Responsabilities = styled.div`
    font-size: 14px;
    color: #F0EDED;
`;

export const Benefits = styled.div`
    font-size: 14px;
    color: #F0EDED;
`;