
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange7() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você sai de perto dele e continua seguindo o caminho.
                No final do caminho, you find a little house made of branches and plants and decorated with flowers (looking like the house of some magical being)

            </BoxTexto>
            <Link to='/strange/12'>
                <BoxTexto>
                    1.  entrar na casinha
                </BoxTexto>
            </Link>
            <Link to='/strange/13'>
                <BoxTexto>
                    2.  esperar alguém aparecer
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}