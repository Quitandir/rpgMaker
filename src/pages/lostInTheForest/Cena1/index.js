import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LostInTheForest() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
                Era uma noite na forest sombria e os amigos Roberson, Gabriel e Jorge escutam muitos barulhos no lado mais escuro da floresta. Eles vão pegar as flashlight, mas estavam com pouca bateria. 
            </BoxTexto>
            <Link to='/lostInTheForest/2'>
                <BoxTexto>
                     1. Eles vão para o lado escuro da floresta.
                </BoxTexto>
            </Link>
            <Link to='/lostInTheForest/3'>
                <BoxTexto>
                     2. Ou eles vão procurar abrigo onde estava vindo o barulho para tentar passar a noite.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}