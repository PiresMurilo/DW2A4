import * as C from './styles';
import Logo1 from '../../assets/logos/magalu_logo.png';
import Logo2 from '../../assets/logos/itau_logo.png';
import Logo3 from '../../assets/logos/carrefour_logo.png';
import Logo4 from '../../assets/logos/latam_logo.png';

type Prop = {
    title: string;
    icon: string;
    local: string;
    responsabilities: string;
    benefits: string;
    selected: boolean;
    onClick: () => void;
}


export const Selections = ({title, icon, local, responsabilities, benefits, selected, onClick}: Prop) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>
                {icon === 'logo1' &&
                    <img  src={Logo1} alt="Logo Magazine Luiza"/>
                }
                {icon === 'logo2' &&
                    <img  src={Logo2} alt="Logo Banco Itaú"/>
                }
                {icon === 'logo3' &&
                    <img  src={Logo3} alt="Logo Carrefour"/>
                }
                {icon === 'logo4' &&
                    <img  src={Logo4} alt="Logo LATAM"/>
                }
            </C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Local>{local}</C.Local>
                <C.Responsabilities>{responsabilities}</C.Responsabilities>
                <C.Benefits>{benefits}</C.Benefits>
            </C.Info>
        </C.Container>
    );
}