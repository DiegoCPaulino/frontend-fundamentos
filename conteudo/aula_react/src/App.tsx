import { Botao } from "./components/Botao/Botao";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <>
      <h1>Componentes</h1>
      <Botao />
      <Button title="Title"/>
      <Card>
        <h2> Card </h2>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus dolores, cumque sapiente iste assumenda officia, molestiae nisi adipisci natus alias? Velit, consequuntur iure? Vero cumque iusto voluptatibus nesciunt recusandae?</p>
        <Button title='Clique aqui' />
      </Card>
    </>
  )
}

export default App
