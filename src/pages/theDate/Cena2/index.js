
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function TheDate2() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Pedimos a sopa porém era uma coisa horrível, e então, eu descobri a verdadeira identidade dela, então para tentar acalmá-la, resolvi lhe dar um presente, mas qual dos dois devo presenteá-la? 

            </BoxTexto>
            <Link to='/theDate/4'>
                <BoxTexto>
                     1.Relógio de prata
                </BoxTexto>
            </Link>
            <Link to='/theDate/5'>
                <BoxTexto>
                     2. Colar de ouro.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}