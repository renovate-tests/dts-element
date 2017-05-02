import {BasicType} from './elements/types/basic-type';

export const any_type = new BasicType({name: 'any'});
export const never_type = new BasicType({name: 'never'});

export const null_type = new BasicType({name: 'null'});
export const undefined_type = new BasicType({name: 'undefined'});
export const void_type = new BasicType({name: 'void'});

export const boolean_type = new BasicType({name: 'boolean'});
export const number_type = new BasicType({name: 'number'});
export const string_type = new BasicType({name: 'string'});
export const symbol_type = new BasicType({name: 'symbol'});
export const object_type = new BasicType({name: 'object'});

export const this_type = new BasicType({name: 'this'});

export enum ParameterFlag {
  NONE,
  REST,
  OPTIONAL,
}
