import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.jpg';

export default function Strange13() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você espera alguém aparecer e você dorme sem perceber…
                When you wake up, your group is around you worried about why you disappeared, you say that horrible things had happened around here, but they don't care much about it and take you to the bus so they can go home.

            </BoxTexto>
            <BoxTexto>
                GOOD ENDING 2
                A sua turma achou você e todos conseguiram voltar para a casa…


            </BoxTexto>
            <Link to='/strange/1'>
                <BoxTexto>
                    Jogar novamente
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}