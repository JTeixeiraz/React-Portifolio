import Contato from "./compMain/Contato";
import Name from "./compMain/Name";
import Projetos from "./compMain/Projetos";
import SobreMim from "./compMain/SobreMim";
import Tecnologias from "./compMain/Tecnologias";
import Line from "./Line";

function MainP(){
    return(
        <main>
            <Name />
            <Line />
            <SobreMim />
            <Line />
            <Tecnologias />
            <Line />
            <Contato />
            <Line />
        </main>
    )
}

export default MainP;