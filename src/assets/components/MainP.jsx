import Name from "./compMain/Name";
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
        </main>
    )
}

export default MainP;