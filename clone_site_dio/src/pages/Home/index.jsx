import Button from "../../components/Button"
import Header from "../../components/Header"
import './styles.css'

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
                    <div className="TitleContent">
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional evoluindo com uma comunidade de experts!
                    </div>
                    <Button title={"Começar"} onClick={()=>null}></Button>
                </div>
                <div>
                    <img src="#" alt="Imagem Principal" />
                </div>
            </div>
        </>
    )
}

export { Home }