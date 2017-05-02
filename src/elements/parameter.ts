import {any_type, ParameterFlag} from '../constants';
import {Element} from '../element';
import {emit_parameter_main} from '../helpers/emit-parameter-main';
import {emit_parameter_type} from '../helpers/emit-parameter-type';
import {Stack} from '../stack';
import {Type} from './type';

export interface IParameterRequiredParameters {
  name: string;
}

export interface IParameterOptionalParameters {
  type: Type;
  flag: ParameterFlag;
}

export class Parameter extends Element<IParameterRequiredParameters, IParameterOptionalParameters> {

  public get default_parameters(): IParameterOptionalParameters {
    return {
      type: any_type,
      flag: ParameterFlag.NONE,
    };
  }

  public _emit(stack: Stack): string {
    const {name, type, flag} = this.parameters;
    return `${emit_parameter_main(name, flag)}: ${emit_parameter_type(type, flag, stack)}`;
  }

}
