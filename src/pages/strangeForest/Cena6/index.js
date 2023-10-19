
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange6() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você conversa com o seu amigo sobre a floresta ser um pouco macabra e estranha, but you find your group and they manage to leave that forest.

            </BoxTexto>
            <BoxTexto>
                GOOD ENDING 1
                Você conseguiu achar a sua turma e foi embora da floresta!

            </BoxTexto>
            <Link to='/strange/1'>
                <BoxTexto>
                    Jogar de novo?
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}