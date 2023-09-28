import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LostSword3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Ele recusou a oferta e quis continuar treinando sozinho na rua como ele quiser. Nisso se envolveu em uma briga depois, e apanhou, então ele fugiu para forest.            
            </BoxTexto>
            <Link to='/lostSword/4'>
                <BoxTexto>
                    Explorar a floresta. 
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}