import {ReactNode} from 'react';
import * as C from './styles';
import {Header} from '../Header';
import {SidebarItem} from '../SidebarItem';
import {useForm} from '../../contexts/FormContext'

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    const {state} = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Parts>
                    <C.Sidebar>
                        <SidebarItem
                            title="Home"
                            description="PEGUE O SEU TRAMPO!"
                            icon="home-icon"
                            path="/"
                            active={state.currentPage === 1}
                        />

                        <SidebarItem
                            title="Cadastre-se"
                            description="Entre no sistema e deixe o resto com a gente!"
                            icon="cadastro-icon"
                            path="/cadastro"
                            active={state.currentPage === 2}
                        />

                        <SidebarItem
                            title="Vagas"
                            description="Veja aqui as nossas oportunidades"
                            icon="vagas-icon"
                            path="/vagas"
                            active={state.currentPage === 3}
                        />

                        <SidebarItem
                            title="Dados da vaga"
                            description="Nos ajude a te conhecer um pouco mais"
                            icon="dados-icon"
                            path="/dados-vaga"
                            active={state.currentPage === 4}
                        />

                        <SidebarItem
                            title="Pronto!"
                            description=""
                            icon="final-icon"
                            path="/final"
                            active={state.currentPage === 5}
                        />

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Parts>
            </C.Area>
        </C.Container>
    );
}