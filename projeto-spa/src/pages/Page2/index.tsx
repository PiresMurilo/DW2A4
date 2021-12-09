import * as C from './styles';
import {Theme} from '../../components/Theme';
import {useNavigate} from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext';
import {ChangeEvent, useEffect} from 'react';

export const Page2 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    const nextPage = () => {
        if(state.name !== '' && state.secondName !== '' && state.email !== '' && state.password !== ''){
            navigate("/vagas");
        }
        else {
            alert("Preencha todos os dados!");
        }
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentPage,
            payload: 2
        });
    }, []);

    // funcoes de mudança
    const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }
    const secondNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setSecondName,
            payload: e.target.value
        });
    }
    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setPassword,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>CADASTRE-SE</h1>
                <p>Preencha os campos solicitados para ser cadastrado em nosso sistema.</p>

                <hr/>

                <label>
                    Primeiro nome
                    <input
                        type="text"
                        autoFocus={true}
                        value={state.name}
                        onChange={nameChange}
                    />
                    Sobrenome
                    <input
                        type="text"
                        value={state.secondName}
                        onChange={secondNameChange}
                    />
                    E-mail
                    <input
                        type="text"
                        value={state.email}
                        onChange={emailChange}
                    />
                    Senha
                    <input
                        type="password"
                        value={state.password}
                        onChange={passwordChange}
                    />
                    Confirmação de senha
                    <input
                        type="password"
                    />
                </label>

                <button onClick={nextPage}>PRÓXIMO</button>
            </C.Container>
        </Theme>
    );
}