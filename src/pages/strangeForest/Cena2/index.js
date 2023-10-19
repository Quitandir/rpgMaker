
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange2() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você decide ir no caminho das árvores, e você escuta barulhos estranhos mas você não liga pra isso e continua seguindo o seu caminho, you find a cabin and these sounds were coming from an abandoned cabin.
            </BoxTexto>
            <Link to='/strange/4'>
                <BoxTexto>
                     1.   entrar na cabana 
                </BoxTexto>
            </Link>
            <Link to='/strange/5'>
                <BoxTexto>
                     2.  seguir o caminho
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}