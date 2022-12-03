import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input'
import './styles.css'
import {MdEmail, MdLock, MdAccountBox} from 'react-icons/md'

export default function Cadastro () {
  return (
    <>
        <Header />
        <div className='Container'>
            <div className='TextoPrincipal'>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </div>
            <div>
                <h3 className='TextoCadastro'>Comece agora grátis</h3>
                <p className='TextoSecundarioCadastro'>Crie sua conta e make the change</p><br />
                <Input placeholder='Nome Completo' leftIcon={<MdAccountBox></MdAccountBox>}/>
                <Input placeholder='Email' type="email" leftIcon={<MdEmail></MdEmail>}/>
                <Input placeholder='Senha' type="password" leftIcon={<MdLock></MdLock>}/>
                <Button title={'Criar conta!'}/><br />
                <p className='TextoSecundarioCadastro'>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                <a href="/login" className='JaTenhoConta'>Já tenho conta. Fazer Login</a>
            </div>
        </div>
    </>
  )
}
