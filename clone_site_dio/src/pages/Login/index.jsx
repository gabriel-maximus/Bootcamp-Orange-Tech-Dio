import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import './styles.css'

const Login = () =>{
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
                    <p className="TextContent">
                        Domine as tecnologias utilizadas pelas empresas mais
                        inovadoras do mundo e encare seu novo desafio
                        profissional, evoluindo com uma comunidade com os
                        melhores experts!
                    </p>
                    <Button title={"Começar"} onClick={()=>null}></Button>
                </div>
                <div>
                    <Input placeholder="email"></Input>
                </div>
            </div>
        </>
    )
}

export { Login }