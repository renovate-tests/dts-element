jest.unmock('../emit-parameter-main');

import {ParameterKind} from '../../constants';
import {emit_parameter_main} from '../emit-parameter-main';

it('should return correctly', () => {
  expect(emit_parameter_main('name', ParameterKind.NONE)).toMatchSnapshot();
});
