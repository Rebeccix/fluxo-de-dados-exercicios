import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const { addPost } = props 

  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeImg = (e) => {
    setImg(e.target.value)
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const post = () => {
    addPost({
      title:title,
      url:img,
      description:description
    })
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={onChangeTitle}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={onChangeImg}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={onChangeDescription}/>
        </StyledLabel>
        <SendButton onClick={post}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
