import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function TheBakery3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você foi até a padaria lá você acaba vendo o chefe do pessoal de lá, ele está triste pois ninguém foi comprar pão com ele, você vai ajudá-lo?             
            </BoxTexto>
            <Link to='/theBakery/4'>
                <BoxTexto>
                    Você entra na loja e comprar um pão.
                </BoxTexto>
            </Link>
            <Link to='/theBakery/5'>
                <BoxTexto>
                    Você não entra na padaria.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}