import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function TechWorld3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Uff,você achou uma casa segura. Agora tem um abrigo. *Você vasculha a casa e acha comida* Nice, achei alimentos, agora é melhor eu me alimentar e descansar - * Mas ainda existem robôs no mundo, não é seguro vocẽ dormir!!* O que você vai fazer?! 
            </BoxTexto>
            <Link to='/techWorld/4'>
                <BoxTexto>
                    1. Se alimentar e descansar.
                </BoxTexto>
            </Link>
            <Link to='/techWorld/5'>
                <BoxTexto>
                    2. Se alimentar e vasculhar.
 
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}