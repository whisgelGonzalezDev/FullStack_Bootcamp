import './App.css';
import Mensaje from './Mensaje'
const Description = () => {
    return <p>Esta es una description de la aplicacion del bootcamp fullstack</p>

}

const App = () => {

    return ( 
    <div className = 'App'>
        <Mensaje color = 'red'message= 'Esto es un mensaje' />
        <Mensaje color = 'green'message= 'Pasado desde parametros' />
        <Mensaje color = 'blue'message= ' a un componente '/>
        <Mensaje color = 'aqua'message='separado'/>
        <Description />
    </div>
    );
}

export default App;