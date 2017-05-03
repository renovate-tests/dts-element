jest.unmock('../emit-parameter-type');

import {any_type} from '../../constants';
import {ParameterKind} from '../../constants';
import {Stack} from '../../stack';
import {emit_parameter_type} from '../emit-parameter-type';

it('should return emitted type while flag is not rest', () => {
  expect(emit_parameter_type(any_type, ParameterKind.REST, new Stack())).toMatchSnapshot();
});

it('should return emitted type wrapped with ArrayType while flag is rest', () => {
  expect(emit_parameter_type(any_type, ParameterKind.NONE, new Stack())).toMatchSnapshot();
});
