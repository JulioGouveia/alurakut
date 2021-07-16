import React from 'react'
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/componentes/lib/CommonsAlura'
import { ProfileRelationsBoxWrapper, ProfileRelationsBoxConstructor} from '../src/componentes/ProfileRelations'

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
  
  const [seguidores, setSeguidores] = React.useState([]);

  React.useEffect( function () {
      fetch('https://api.github.com/users/'+usuarioAleatorio+'/followers')
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      }).then(function (respostaCompleta) {
        setSeguidores(respostaCompleta);
        });
    },[])
  
    const seguidoresAtualizados = seguidores.map((i)=> {
      return ({
        id: i.id,
        title: i.login,
        img: i.avatar_url
      })
    })

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
        
        <ProfileRelationsBoxConstructor title="Meus Amigos" itens={seguidoresAtualizados}/>
                  
        <ProfileRelationsBoxConstructor title="Comunidades" itens={comunidades}/>
        
      </div>
      </MainGrid>
    </>
  )
}
