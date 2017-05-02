import {Element} from '../element';
import {emit_members} from '../helpers/emit-members';
import {Stack} from '../stack';
import {Declaration} from './declaration';

export interface IDeclareGlobalRequiredParameters {
  children: Declaration[];
}

// tslint:disable-next-line no-empty-interface
export interface IDeclareGlobalOptionalParameters {}

export class DeclareGlobal extends Element<IDeclareGlobalRequiredParameters, IDeclareGlobalOptionalParameters> {

  public get default_parameters(): IDeclareGlobalOptionalParameters {
    return {};
  }

  public _emit(stack: Stack): string {
    const {children} = this.parameters;
    return `declare global ${emit_members(children, stack)}`;
  }

}
