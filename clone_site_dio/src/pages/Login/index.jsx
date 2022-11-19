import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import './styles.css'

import {MdEmail, MdLock} from 'react-icons/md'

const Login = () =>{
    return(
        <>
            <Header></Header>
            <div className="Container">
                <div className="Column">
                    <div className="Title">
                        A plataforma para você aprender com experts, dominar as principais tecnologias,
                        e entrar mais rápido nas empresas mais desejadas.
                    </div>
                </div>
                <div className="Column">
                    <div className="Wrapper">
                        <p className="TitleLogin">Faça seu cadastro!</p>
                        <p className="SubtitleLogin">Faça seu login e make the change.</p>
                        <form>
                            <Input placeholder="Email" type="email" leftIcon={<MdEmail></MdEmail>}></Input>
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock></MdLock>}></Input>
                            <Button title={"Entrar"}></Button>
                        </form>
                        <div className="Row">
                            <p className="EsqueciText">Esqueci minha senha</p>
                            <p className="CriarText">Criar conta</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Login }