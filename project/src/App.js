import './App.css';
import Button from './components/MyButton/Button'
import Container from './components/MyButton/Container'
const buttonArray = ['red','blue','violent','yellow']
function App() {
  return (
    <Container>
      {buttonArray.map((element)=>
        <Button className = {`button ${element}`}>{element}</Button>
      )}
    </Container>
  );
}

export default App;
