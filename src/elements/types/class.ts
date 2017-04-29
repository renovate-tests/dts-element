import {Container} from '../../collections';
import {emit_class_name} from '../../helpers/emit-class-name';
import {emit_generics} from '../../helpers/emit-generics';
import {ClassDeclaration} from '../declarations/class';
import {Type} from '../type';

export interface IClassTypeRequiredParameters {
  owned: string | ClassDeclaration;
}

export interface IClassTypeOptionalParameters {
  generics: Type[];
}

export class ClassType extends Type<IClassTypeRequiredParameters, IClassTypeOptionalParameters> {

  public get default_parameters(): IClassTypeOptionalParameters {
    return {
      generics: [],
    };
  }

  public _emit(_container: Container): string {
    const name = emit_class_name(this.parameters.owned);
    return `${name}${emit_generics(this.parameters.generics, this)}`;
  }

}
