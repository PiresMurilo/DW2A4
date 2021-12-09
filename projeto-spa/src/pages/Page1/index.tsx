import * as C from './styles';
import {Theme} from '../../components/Theme';
import {useNavigate} from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext';
import {useEffect} from 'react';

export const Page1 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();
    
    const nextPage = () => {
        navigate("/cadastro");
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentPage,
            payload: 1
        });
    }, []);

    return (
        <Theme>
            <C.Container>
            <h1>A PONTE PARA A SUA PRÓXIMA OPORTUNIDADE!</h1>
            <p>Somos um portal que tem o propósito de contribuir para um mundo em que empresas escolhem melhor as pessoas e pessoas aproveitam melhor suas oportunidades!</p>
            <p>Aqui no <b>Toma um Trampo</b> você se cadastra gratuitamente, procura as melhores vagas, se candidata às vagas abertas que mais te interessam e terá finalmente a sua grande oportunidade de trilhar o seu caminho profissional.</p>
            <button onClick={nextPage}>CADASTRE-SE</button>
            </C.Container>
        </Theme>
    );
}