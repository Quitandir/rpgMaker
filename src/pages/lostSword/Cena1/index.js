import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LostSword1() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
                O treinador Naoh viu um menino chamado Jonhy ,na rua treinando uns golpes,nele viu um grande potencial para ser seu aluno. 
            </BoxTexto>
            <Link to='/lostSword/2'>
                <BoxTexto>
                     1. Ele aceitou a oferta 
                </BoxTexto>
            </Link>
            <Link to='/lostSword/3'>
                <BoxTexto>
                     2. Ele recusou.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}