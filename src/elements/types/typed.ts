import {Container} from '../../collections';
import {emit_declaration_type_name} from '../../helpers/emit-declaration-type-name';
import {emit_generics} from '../../helpers/emit-generics';
import {TypeDeclaration} from '../declarations/type';
import {Type} from '../type';

export interface ITypedTypeRequiredParameters {
  owned: string | TypeDeclaration;
}

export interface ITypedTypeOptionalParameters {
  generics: Type[];
}

export class TypedType extends Type<ITypedTypeRequiredParameters, ITypedTypeOptionalParameters> {

  public get default_parameters(): ITypedTypeOptionalParameters {
    return {
      generics: [],
    };
  }

  public _emit(_container: Container): string {
    const name = emit_declaration_type_name(this.parameters.owned);
    return `${name}${emit_generics(this.parameters.generics, this)}`;
  }

}
