
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LastOfInstruments2() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Daí você encontra uma HUT. O que você faz?
            </BoxTexto>
            <Link to='/lastOfInstruments/4'>
                <BoxTexto>
                     1.Entrar na HUT.
                </BoxTexto>
            </Link>
            <Link to='/lastOfInstruments/3'>
                <BoxTexto>
                     2. Continuar caminhando.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}