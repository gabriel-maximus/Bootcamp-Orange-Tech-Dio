import Button from "../../components/Button"
import Header from "../../components/Header"
import './styles.css'
import Logo from "../../assets/logodio.png"
import Principal from "../../assets/imagemprincipal.png"

const Home = () =>{
    return(
        <>
            <Header></Header>
            <div className="Container">
                <div>
                    <div className="Title">
                        <span className="TitleHighLight">
                            Implemente<br></br>
                        </span>
                        o seu futuro global agora!
                    </div>
                    <div className="TextContent">
                        Domine as tecnologias utilizadas pelas empresas mais
                        inovadoras do mundo e encare seu novo desafio
                        profissional, evoluindo com uma comunidade com os
                        melhores experts!
                    </div>
                    <Button title={"Começar"} onClick={()=>null}></Button>
                </div>
                <div>
                    <img src={Principal} alt="Imagem Principal" />
                </div>
            </div>
        </>
    )
}

export { Home }