import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic1 from './apocalipseCity1.jpg';

export default function Cena1() {
    return (
        <TelaBase img={pic1}>           
            
            <BoxTexto>
                Você está em uma cidade destruída,além disso você fica perdido e pensa se seria bom entrar em um dos prédios ou se arriscar pelas streets mas… será que vai valer a pena? O QUE VOCÊ VAI FAZER?
            </BoxTexto>
            <Link to='/apocalipseCity/2'>
                <BoxTexto>
                     1.Continuar pelas streets.
                </BoxTexto>
            </Link>
            <Link to='/apocalipseCity/3'>
                <BoxTexto>
                     2. Entrar nos prédios.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}