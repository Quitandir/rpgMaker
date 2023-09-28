
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.jpg';

export default function Cena4() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você foi mandado para outra dimensão onde os zumbis dominaram tudo e uma entidade zumbizoide devorou você...
            </BoxTexto>
            <BoxTexto>
                GAME OVER!!!
            </BoxTexto>
            
        </TelaBase>
    )
}