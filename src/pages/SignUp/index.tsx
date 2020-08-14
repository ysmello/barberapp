import React from 'react';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>

        <a href="login">
          <FiArrowLeft /> Voltar para logon
        </a>
      </form>
    </Content>
  </Container>
);

export default SignUp;
