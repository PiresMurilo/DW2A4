import * as C from './styles';
import {Theme} from '../../components/Theme';
import {useForm, FormActions} from '../../contexts/FormContext';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

export const Page5 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate("/cadastro");
        }
        dispatch({
            type: FormActions.setCurrentPage,
            payload: 5
        });
    }, []);

    return (
        <Theme>
            <C.Container>
            <h1>PROCESSO CONLUÍDO!</h1>
            <p>Agora é com a gente e com a empresa!</p>
            <p>Fique atento ao seu e-mail de cadastro e se prepare, pois coisas incríveis estão para acontecer com você e com a sua carreira.</p>
            </C.Container>
        </Theme>
    );
}