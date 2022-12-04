import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { defaultValues, IFormLogin } from './types'

const schema = yup.object({
  email: yup.string().required('Campo Obrigatório').email('Email Inválido'),
  password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {

  const {control, formState:{errors, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues,
  }); 
  console.log(errors);

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input name="email" placeholder="Email" control={control} errorMessage={errors?.email?.message}/>
          <Spacing />
          <Input name="password" placeholder="Senha" type={'password'} control={control} errorMessage={errors?.password?.message}/>
          <Spacing />
          <Button title="Entrar" />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
