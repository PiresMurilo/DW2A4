import * as C from './styles';
import Logo from '../../assets/header/logo.png';
import Background from '../../assets/header/background.png';

export const Header = () => {
    return (
        <C.Container>
            <header className="header" style={{backgroundImage: `url(${Background})`}}>
                <img className="logo" src={Logo} alt="Logo Toma Um Trampo" />
            </header>
        </C.Container>
    );
}