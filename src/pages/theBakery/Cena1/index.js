import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function TheBakery1() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
                É noite e todos estão dormindo. Você está com muita fome. O que você vai fazer?
            </BoxTexto>
            <Link to='/theBakery/2'>
                <BoxTexto>
                     1. Stay in your home.
                </BoxTexto>
            </Link>
            <Link to='/theBakery/3'>
                <BoxTexto>
                     2. Ir até a padaria a noite.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}