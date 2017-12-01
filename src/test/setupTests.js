import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotENV from 'dotenv'

Enzyme.configure({
   adapter: new Adapter()
});

DotENV.config({path: '.env.test'});