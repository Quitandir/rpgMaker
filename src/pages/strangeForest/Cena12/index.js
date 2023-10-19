import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange12() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você entra na casinha, e dentro dela tinha alguns elfos se divertindo, você resolve falar com eles:
                - Who are you?
                - Look, a new visitor after years!
                - Oh... Cool but I'm lost here and I can't find my class...
                - Well, I'm sorry but... Now that you've arrived here there's no way to leave, if you leave here it will be very dangerous for you.
                - See you... So can I spend a night here?
                - Clear!
                Mesmo você não conhecendo eles direito, você resolve passar a noite lá mesmo. After a while, a fairy appears inside the house, she asks the elves who you are, they say you are a visitor, she welcomes you and you go to “your” room and sleep…

            </BoxTexto>
            <BoxTexto>
                NORMAL ENDING 2
                Você não achou sua turma, mas pelo menos você não está mais sozinho…

            </BoxTexto>
            <Link to='/strange/1'>
                <BoxTexto>
                    Jogar novamente
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}