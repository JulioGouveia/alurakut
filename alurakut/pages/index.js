import React from 'react'
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/componentes/lib/CommonsAlura'
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations'

function ProfileSidebar (propriedades) {
    return (
      <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} ></img>
        <hr/>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`} style={{margin: '1px'}} >@{propriedades.githubUser}</a>

        <AlurakutProfileSidebarMenuDefault/>
      </Box>  
    )
}

export default function Home() {

  const usuarioAleatorio = "JulioGouveia";
  const [comunidades, setComunidades] = React.useState([{
    id: '37892',
    title: 'Eu odeio acordar cedo',
    img: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const pessoasFavoritas = ['joellobo', 'joseluizcoe', 'mauriciokj', 'joellobo', 'joseluizcoe', 'mauriciokj'];
 
  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio}/>
      <MainGrid>
        <div className="profileArea" style={{ grid: 'profileArea'}}>
          <ProfileSidebar githubUser={usuarioAleatorio}/>
        </div>
        <div className="wellcomeArea" style={{ grid: 'wellcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            
            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">
              O que você deseja fazer hoje?
            </h2>
            <form onSubmit={function handleCriaComunidade(e) {
                  e.preventDefault();

                  const dadosForm = new FormData(e.target);

                  const comunidade = {
                    id: new Date().toISOString(),
                    title: dadosForm.get('title'),
                    img: dadosForm.get('image'),
                  }
                  
                  const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas);


             }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-name="Qual vai ser o nome da sua comunidade?"
                  type="text"
              />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-name="Coloque uma URL para usarmos de capa"
              />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
      <div className="profileRelationsArea" style={{ grid: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Meus Amigos ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => { 
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} key={itemAtual} >
                        <img src={`https://github.com/${itemAtual}.png`}></img>
                        <span>{itemAtual}</span>
                    </a>
                  </li>
                ) 
              })}
            </ul>
            <hr></hr>
            <a className="boxLink">Ver todos</a>
          </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.slice(0, 6).map((itemAtual) => { 
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`} key={itemAtual.title} >
                        <img src={itemAtual.img}></img>
                        <span>{itemAtual.title}</span>
                    </a>
                  </li>
                ) 
              })}
            </ul>
            <hr></hr>
            <a className="boxLink">Ver todos</a>
          </ProfileRelationsBoxWrapper>

          
          <Box>
            Comunidades
          </Box>
      </div>
      </MainGrid>
    </>
  )
}
