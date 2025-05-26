import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import Lista from './components/Lista'
import avatar from './assets/large_1x_user.png'
import avatar2 from './assets/mario_bros.png'
import logo from './assets/react.svg'

const itens1 = ["Tudo componentizado", "Aprendendo React", "Daquele jeito"]
const itens2 = ["Marios Bros", "Nintendinho", "Jogo Retro"]
const itens3 = ["Foto normal", "Cara de camiseta azul", "Bléh"]

function App() {
  return (
    <>
    <Header title="Teste"></Header>
    <main>
      <Section imagem={avatar} title="Imagens de usuario padrão" legenda="Legenda da Section">
                <Lista lista={itens3}></Lista>
      </Section>
      <Section imagem={avatar2} title="Marios Bros." legenda="Melhor jogo de NES">
        <Lista lista={itens2}></Lista>
      </Section>
      <Section imagem={logo} title="React" legenda="Aplicação feita em React">
        <Lista lista={itens1}></Lista>
      </Section>
    </main>
    </>
  )
}

export default App
