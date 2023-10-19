import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você decide ir no caminho de tijolos, e você encontra um dos seus amigos da turma, e você resolve ir até ele.
                - Hey! Did you get lost here too?
                - No (your name), I finally found you, our class was very worried about you. - Well, do you know where they are?
                - Yes, follow me!

            </BoxTexto>
            <Link to='/strange/6'>
                <BoxTexto>
                    1. seguir o seu amigo
                </BoxTexto>
            </Link>
            <Link to='/strange/7'>
                <BoxTexto>
                    2. ignorar ele e sair de perto dele 
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}