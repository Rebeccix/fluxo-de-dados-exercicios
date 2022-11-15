import React, { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const { setPageFlow, setProfile } = props

  const [ name, setName ] = useState('')
  const [ avatar, setAvatar ] = useState('')
  
  const changeName = (e) => {
    setName(e.target.value)
  }
  
  const changeAvatar = (e) => {
    setAvatar(e.target.value)
  }
  
  const login = (e) => {
    e.preventDefault()
    const profile={
      name:name,
      avatar:avatar
    }
    setProfile(profile)
    setPageFlow(2);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={changeName}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} onChange={changeAvatar}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
