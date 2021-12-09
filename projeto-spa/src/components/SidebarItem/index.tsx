import {Link} from 'react-router-dom';
import * as C from "./styles";
import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg';
import {ReactComponent as CadastroIcon} from '../../assets/icons/cadastro.svg';
import {ReactComponent as VagasIcon} from '../../assets/icons/vagas.svg';
import {ReactComponent as DadosIcon} from '../../assets/icons/dados-vaga.svg';
import {ReactComponent as FinalIcon} from '../../assets/icons/final.svg';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({title, description, icon, path, active}: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.Icon active={active}>
                    {icon === 'home-icon' &&
                        <HomeIcon fill="#FFF" width={35} height={35} />
                    }
                    {icon === 'cadastro-icon' &&
                        <CadastroIcon fill="#FFF" width={27} height={27} />
                    }
                    {icon === 'vagas-icon' &&
                        <VagasIcon fill="#FFF" width={35} height={35} />
                    }
                    {icon === 'dados-icon' &&
                        <DadosIcon fill="#FFF" width={35} height={35} />
                    }
                    {icon === 'final-icon' &&
                        <FinalIcon fill="#FFF" width={35} height={35} />
                    }
                </C.Icon>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}