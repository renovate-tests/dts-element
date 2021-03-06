import { string_type } from '../../constants';
import { create_generic_declaration } from '../../declarations/generic-declaration';
import { create_parameter_declaration } from '../../declarations/parameter-declaration';
import { emit } from '../../emit';
import {
  create_constructor_type,
  is_constructor_type,
} from '../constructor-type';

it('should return correctly', () => {
  expect(emit(create_constructor_type())).toMatchSnapshot();
});

it('should return correctly with generics', () => {
  expect(
    emit(
      create_constructor_type({
        generics: [
          create_generic_declaration({ name: 'T' }),
          create_generic_declaration({ name: 'U' }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with parameters', () => {
  expect(
    emit(
      create_constructor_type({
        parameters: [
          create_parameter_declaration({ name: 'a' }),
          create_parameter_declaration({ name: 'b' }),
        ],
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with return', () => {
  expect(
    emit(
      create_constructor_type({
        return: string_type,
      }),
    ),
  ).toMatchSnapshot();
});

it('should return correctly with generics, parameters, return', () => {
  expect(
    emit(
      create_constructor_type({
        generics: [
          create_generic_declaration({ name: 'T' }),
          create_generic_declaration({ name: 'U' }),
        ],
        parameters: [
          create_parameter_declaration({ name: 'a' }),
          create_parameter_declaration({ name: 'b' }),
        ],
        return: string_type,
      }),
    ),
  ).toMatchSnapshot();
});

describe('is_constructor_type', () => {
  it('should return correctly', () => {
    const element = create_constructor_type();
    expect(is_constructor_type(element)).toBe(true);
  });
});
