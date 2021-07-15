import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {AlurakutStyles} from '../src/componentes/lib/CommonsAlura'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}  

body {
    
    font-family: sans-serif;
    background-color: #483D8B;
  }

#_next {
  display: flex;
  min-height: 110vh;
  flex-direction: column;
}  

${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  console.log( AlurakutStyles )
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
