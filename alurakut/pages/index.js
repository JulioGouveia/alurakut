import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/componentes/lib/CommonsAlura'
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations'

function ProfileSidebar (propriedades) {
    return (
      <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} ></img>
      </Box>  
    )
}

export default function Home() {

  const usuarioAleatorio = "JulioGouveia";
  const pessoasFavoritas = ['joellobo', 'joseluizcoe', 'mauriciokj', 'joellobo', 'joseluizcoe', 'mauriciokj'];

  return (
    <>
    <AlurakutMenu/>
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
      </div>
     <div className="profileRelationsArea" style={{ grid: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Meus Amigos ({pessoasFavoritas.length})</h2>
          <ul>
            {pessoasFavoritas.map((itemAtual) => { 
              return (
                <li>
                   <a href={`/users/${itemAtual}`} key={itemAtual} >
                      <img src={`https://github.com/${itemAtual}.png`}></img>
                      <span>{itemAtual}</span>
                  </a>
                </li>
              ) 
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>
          Comunidades
        </Box>
     </div>
    </MainGrid>
  </>
  )
}
