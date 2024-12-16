import { Button } from './components/Button';

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
      
    </div>
  );
}

export default App;
