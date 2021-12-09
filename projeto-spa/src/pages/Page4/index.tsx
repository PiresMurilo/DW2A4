import * as C from './styles';
import {Theme} from '../../components/Theme';
import {useNavigate, Link} from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext';
import {ChangeEvent, useEffect} from 'react';

export const Page4 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate("/cadastro");
        }
        dispatch({
            type: FormActions.setCurrentPage,
            payload: 4
        });
    }, []);

    const nextPage = () => {
        if(state.statusEx !== ''){
            navigate("/final");
        }
        else {
            alert("Preencha todos os dados!");
        }
    }

    // funcoes de mudança
    const statusExChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setStatusEx,
            payload: e.target.value
        });
    }
    const responsabilityChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setResponsability,
            payload: e.target.value
        });
    }
    const profileChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setProfile,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
            <p>Passo 3/3</p>
                <h1>DADOS SOBRE A VAGA</h1>
                <p>Aguenta aí, {state.name}!</p>
                <p>Estamos terminando! Precisamos que nos diga mais sobre você.</p>

                <hr/>

                <label>
                    Você possui experiências anteriores?
                    <input
                        type="text"
                        value={state.statusEx}
                        onChange={statusExChange}
                    />
                </label>
                <label>
                Caso tenha respondido sim à pergunta anterior, conte-nos suas responsabilidades:
                    <input
                        type="text"
                        value={state.responsability}
                        onChange={responsabilityChange}
                    />
                </label>
                <label>
                Possui algum link onde podemos te achar? (Ex: LinkedIn, GitHub, etc)
                    <input
                        type="text"
                        value={state.profile}
                        onChange={profileChange}
                    /> 
                </label>

                <Link to="/vagas" className="backButton">Voltar</Link>
                <button onClick={nextPage}>CANDIDATAR-SE À VAGA</button>
            </C.Container>
        </Theme>
    );
}