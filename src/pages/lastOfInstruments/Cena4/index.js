
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LastOfInstruments4() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você vê na HUT um monstro com braços de violão. O mostro fala que para sair vivo dessa cabana você deve fazer uma batalha de guitarra com ele. Você concorda e ele pergunta qual solo de guitarra você vai fazer.
            </BoxTexto>
            <Link to='/lastOfInstruments/5'>
                <BoxTexto>
                    1. Guns'n'Roses
                </BoxTexto>
            </Link>
            <Link to='/lastOfInstruments/5'>
                <BoxTexto>
                    2. Metallica
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}