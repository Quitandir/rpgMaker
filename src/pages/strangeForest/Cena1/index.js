import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange9() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você está em um passeio escolar, e a sua turma vai até uma floresta para fazer um acampamento. No meio do caminho, você se perdeu da sua turma e agora precisa encontrar eles. Do you find a sign pointing to two places, a brick path and a stone path, where do you want to go now?
            </BoxTexto>
            <Link to='/strange/2'>
                <BoxTexto>
                    1. ir para o caminho de tijolos
                </BoxTexto>
            </Link>
            <Link to='/strange/3'>
                <BoxTexto>
                   2. ir para o caminho das pedras 
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}