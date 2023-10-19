import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange5() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                No meio do caminho, tem um ônibus abandonado,você resolve entrar e dentro tinha medicamentos e um pouco de comida, You take the medicine and food and continue on your way, you find an injured person asking for help, what do you do?
            </BoxTexto>
            <Link to='/strange/10'>
                <BoxTexto>
                    1. ajudar com os medicamentos
                </BoxTexto>
            </Link>
            <Link to='/strange/11'>
                <BoxTexto>
                    2. não ajudar a pessoa e seguir o caminho 
                </BoxTexto>
            </Link> 

        </TelaBase>
    )
}