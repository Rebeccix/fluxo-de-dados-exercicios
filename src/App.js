import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [post, setPost] = useState([])
  const [profile, setProfile] = useState({
    name:'',
    avatar:''
  })


  const addPost = (current) => {
    if (post.length === 0) {
      setPost([{...current}])
    } else {
      post.map(() => {
        setPost([...post, current])
      })
    }
  }

  const deletePost = (current) => {
    const filtered = post.filter((posts) => posts.title !== current.title);
    setPost([...filtered])
  }


  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} setProfile={setProfile} />
          ) : (
            <FormularioPostagem addPost={addPost}/>
          )}
        </aside>
        <TelaDaPostagem profile={profile} post={post} deletePost={deletePost}/>
      </Container>
    </>
  );
}

export default App;
