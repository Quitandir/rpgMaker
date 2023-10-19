
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange4() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Quando você entra, você sente um cheiro de carne podre e também barulhos de ratos e outros sons estranhos, você acha alguns papeis e você resolve ler eles:
                “Aqui não é mais um lugar seguro, aqui não tem mais paz, aqui virou um inferno… Se você ler essa carta, apenas fuja daqui antes que ele te pegue”
                You wonder who it is, and you hear noises, you look back and there is a being with a hood…
            </BoxTexto>
            <Link to='/strange/8'>
                <BoxTexto>
                    1. enfrentar ele
                </BoxTexto>
            </Link>
            <Link to='/strange/9'>
                <BoxTexto>
                    2. tentar sair da cabana
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}