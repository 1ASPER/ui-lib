import { Button } from './components/Button';
import { Input } from './components/Input';
import { Typography } from './components/Typography';


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

        <div className="typography-container">
          <Typography textSize="sm">
          SM. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
          </Typography>
          <Typography textSize="md">
          MD. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
          </Typography>
          <Typography textSize="lg">
          LG. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
          </Typography>
        </div>

      
    </div>
  );
}

export default App;
