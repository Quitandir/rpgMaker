import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Hospital5() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Eu segui caminhando pelo hospital. Até que achei uma mala com algumas ferramentas para carro. Mas estavam enferrujadas demais para usar. Caminhando mais um pouco, achei uma sala com uma maca e um corpo em cima. Fiquei tremendo de medo e corri até a saída.            
            </BoxTexto>
            <Link to='/hospital/7'>
                <BoxTexto>
                E logo ouvi uma voz me chamando. 

                </BoxTexto>
            </Link>
            
        </TelaBase>
    )
}