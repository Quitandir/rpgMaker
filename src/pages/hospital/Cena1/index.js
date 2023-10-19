import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Hospital1() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
            Amélia, 23 anos, califórnia, EUA 
            23:30 PM 
            Estava cansada pois passei o dia inteiro na casa dos meus pais, então a noite resolvi ir para casa mesmo meus pais insistindo para mim dormir lá, pois morava logo na cidade do lado. 
            00:36 PM 
            Estava indo para casa, quando o carro parou, fui descer para ver o que tinha acontecido, ele acabou atolando na lama…. 
            </BoxTexto>
            <Link to='/hospital/2'>
                <BoxTexto>
                     1. Sair para procurar help. 
                </BoxTexto>
            </Link>
            <Link to='/hospital/3'>
                <BoxTexto>
                     2. Ficar no carro e esperar amanhecer para buscar help.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}