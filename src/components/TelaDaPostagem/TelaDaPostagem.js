import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  const { profile, post, deletePost } = props;

  return (
    <ContainerPostagem>
      {
        profile.name && profile.avatar ? 
        <>
        </>
        :
        <>
          <TitleHeader>Um titulo</TitleHeader>
          <Image src={"https://picsum.photos/536/354"} />
          <Description>Uma descrição</Description>
        </>
      }
      <>
      { 
        post.map((i) => (
          <span>
            <TitleHeader>{i.title}</TitleHeader>
            <Image src={i.url} />
            <Description>{i.description}</Description>
            <button onClick={() => deletePost(i)}>Deletar post</button>
          </span>
        ))
      }
      </>
    </ContainerPostagem>
  ); 
};

export default TelaDaPostagem;
