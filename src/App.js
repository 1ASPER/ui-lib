import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  return (
    <div className="wrapper">

        {/* Button */}
      
        <div className="button-container">
            
            <Button className='button' variant ='primary' size='large'>lg, primary</Button>
            <Button className='button' variant ='primary' size='medium'>md, primary</Button>
            <Button className='button' variant ='primary' size='small'>sm, primary</Button>

            <Button className='button' variant ='bordered' size='large'>lg, bordered</Button>
            <Button className='button' variant ='bordered' size='medium'>md, bordered</Button>
            <Button className='button' variant ='bordered' size='small'>sm, bordered</Button>
            
        </div>

        {/* Input */}

        <div className="input-container">
            <Input type="text" placeholder="Ivan Ivanov" label="Name" />
            <Input type="text" placeholder="Focus" label="Name" />
            <Input type="text" placeholder="Danger" danger label="Name" />
            {/* <Input type="text" placeholder="Enter your password" disabled label="Name" value="Disabled"/> */}
        </div>
      
    </div>
  );
}

export default App;
