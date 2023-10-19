import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange10() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você resolve ajudar a pessoa, mas enquanto você ajuda ela a sua visão começa a escurecer, quando a sua visão fica toda preta você ouve uma voz…
                - Be careful next time…
            </BoxTexto>
            <BoxTexto>
                BAD ENDING 2
                A… Dona morte?...

            </BoxTexto>
            <Link to='/strange/1'>
                <BoxTexto>
                    Jogar novamente
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}