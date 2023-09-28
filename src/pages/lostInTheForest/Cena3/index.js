import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LostInTheForest3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Encontraram uma hut muito sombria e havia um senhor, e o senhor os convidou para entrar pois estava muito cold, mas as crianças ficaram com um pouco de medo, pois o senhor era muito estranho.
            </BoxTexto>
            <Link to='/lostInTheForest/4'>
                <BoxTexto>
                    Eles entram na hut para passar a noite.
                </BoxTexto>
            </Link>
            <Link to='/lostInTheForest/5'>
                <BoxTexto>
                    Eles se recusam entrar na hut e correm com medo do old man.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}