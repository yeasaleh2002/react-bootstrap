import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import News from './components/News/News';


function App() {
  return (
    <div className="App">
         {/* <Button>button</Button> <br />
         <Spinner animation="grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> */}
        <News></News>
    </div>
  );
}

export default App;


// react a bootstrap use korar best process holo ------https://react-bootstrap.github.io/ ------ ai websiter document use kore kaj kora.
/* 
1. npm install react-bootstrap@next bootstrap@5.1.1        ---------- ai text  use react bootstrap install kore naite hobe.
2. bootstrap app.js a import korte hobe. 
3. react bootstrap by default css use kore na ,ai jonno css file import korte hobe. app.js ar moddew kora jabe./public/index.html a giya cdn link o use kora jabe.  details sob website a dewya ase.
4. !important --- react button ar sob gula tag ar first work capital word hobe. because ata orginal html na. nijeder banano tag(component a moto)
*/
