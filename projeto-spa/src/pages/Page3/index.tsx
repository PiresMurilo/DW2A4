import * as C from './styles';
import {Theme} from '../../components/Theme';
import {useNavigate, Link} from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext';
import {useEffect} from 'react';
import {Selections} from '../../components/Selections';

export const Page3 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate("/cadastro");
        }
        dispatch({
            type: FormActions.setCurrentPage,
            payload: 3
        });
    }, []);

    const nextPage = () => {
        navigate("/dados-vaga");
    }
    const setVacancy = (vacancy: number) => {
        dispatch({
            type: FormActions.setVacancy,
            payload: vacancy
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, é hora de escolher uma vaga!</h1>
                <p>Escolha dentre as opções abaixo para qual vaga pretende se candidatar.</p>

                <hr/>

                <Selections 
                    title="MAGAZINE LUIZA - Assistente de Loja"
                    icon="logo1"
                    local="Local: Goiânia - GO"
                    responsabilities="Responsabilidades: Atendimento aos clientes de forma presencial ou através de plataformas digitais e gerenciar a compra dos clientes, identificando necessidades e apresentando os produtos e serviços da loja."
                    benefits="Benefícios: Vale-Transporte, Vale-Refeição, Vale-Alimentação, Seguro de Vida, Previdência Privada, Desconto em Produtos"
                    selected={state.vacancy === 0}
                    onClick={()=>setVacancy(0)}
                />

                <Selections 
                    title="BANCO ITAÚ - Analista de Produtos"
                    icon="logo2"
                    local="Local: Salvador - BA"
                    responsabilities="Responsabilidades: Fazer a gestão da sua carteira de clientes, prezando pela saúde financeira de cada um deles e oferecendo as melhores soluções e assessorar o cliente nas decisões financeiras importantes."
                    benefits="Benefícios: Vale-Transporte, Vale-Refeição, Vale-Alimentação, Seguro de Vida, Previdência Privada, Assistência Médica"
                    selected={state.vacancy === 1}
                    onClick={()=>setVacancy(1)}
                />

                <Selections 
                    title="CARREFOUR - Auxiliar De Caixa"
                    icon="logo3"
                    local="Local: Foz do Iguaçu - PR"
                    responsabilities="Responsabilidades: Receber com excelência no atendimento todas as vendas realizadas na loja recepcionando o cliente no caixa, efetuando seu pagamento e indicando as formas de pagamento"
                    benefits="Benefícios: Vale-Transporte, Vale-Refeição, Vale-Alimentação, Seguro de Vida, Previdência Privada, Assistência Médica"
                    selected={state.vacancy === 2}
                    onClick={()=>setVacancy(2)}
                />

                <Selections 
                    title="LATAM - Analista de Custos SR"
                    icon="logo4"
                    local="Local: São Paulo - SP"
                    responsabilities="Responsabilidades: Garantir a precisão dos números de estoque / custo e métricas para LATAM com base nos requisitos técnicos de contabilidade (IFRS e USGAAP), políticas específicas da empresa e análises eficazes."
                    benefits="Benefícios: Vale-Transporte, Vale-Refeição, Vale-Alimentação, Seguro de Vida, Previdência Privada, Assistência Médica"
                    selected={state.vacancy === 3}
                    onClick={()=>setVacancy(3)}
                />

                <Link to="/cadastro" className="backButton">Voltar</Link>
                <button onClick={nextPage}>PRÓXIMO</button>
            </C.Container>
        </Theme>
    );
}