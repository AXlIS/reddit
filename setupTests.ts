import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export function config(){
  configure({ adapter: new Adapter() });
}


