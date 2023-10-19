import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange8() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                BAD ENDING 1
                Você morreu para o ser de capuz, mais sorte na próxima vez…

            </BoxTexto>
            <Link to='/strange/1'>
                <BoxTexto>
                    Jogar novamente?
                </BoxTexto>
            </Link>
            

        </TelaBase>
    )
}