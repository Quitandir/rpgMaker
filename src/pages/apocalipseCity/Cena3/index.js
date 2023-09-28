import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.jpg';

export default function Cena3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você entrou em um prédio meio abandonado,você pensa em ficar lá afinal nenhum zumbi esta lá você tem mais nada com o que se preocupar mas pela solidão você decide explorar um pouco esse prédio  e descobre que você está machucado, por sorte você descobre um kit médico e uma máquina meio estranha… O QUE VOCÊ FAZ??
            </BoxTexto>
            <Link to='/apocalipseCity/4'>
                <BoxTexto>
                    1. USAR A ??????????
                </BoxTexto>
            </Link>
            <Link to='/apocalipseCity/5'>
                <BoxTexto>
                    2. USAR O KIT MÉDICO
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}