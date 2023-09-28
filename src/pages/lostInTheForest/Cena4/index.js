
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LostInTheForest4() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Eles entram na hut e havia muita comida, mas estavam sentindo um cheiro muito strange vindo do bathroom e o senhor não os deixava ir para bathroom.
            </BoxTexto>
            <Link to='/lostInTheForest/6'>
                <BoxTexto>
                    1. Eles tentam entrar no bathroom para saber o que era aquele cheiro strange. 
                </BoxTexto>
            </Link>
            <Link to='/lostInTheForest/5'>
                <BoxTexto>
                    2. Eles tentam encontrar a saída da forest, pois estão com medo do old man.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}