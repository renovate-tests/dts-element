import {AnyDeclaration, Declaration, IDeclarationOptionalParameters} from '../declaration';
import {indent} from '../helpers/indent';
import {AnyElement} from '../element';

// tslint:disable-next-line no-empty-interface
export interface INamespaceRequiredParameters {}

export interface INamespaceOptionalParameters {
  declarations: AnyDeclaration[];
}

export class NamespaceDeclaration extends Declaration<INamespaceRequiredParameters, INamespaceOptionalParameters> {

  public _emit(_container: AnyElement): string {
    const jsdoc = this.emit_jsdoc();
    const {name, declarations} = this.parameters;
    const content = declarations
      .map((declaration: AnyDeclaration) => declaration._emit(this))
      .join('\n');
    return `${jsdoc}declare namespace ${name} {\n${indent(content)}}`;
  }

  public get default_parameters(): IDeclarationOptionalParameters & INamespaceOptionalParameters {
    return Object.assign({}, super.default_declaration_parameters, {
      declarations: [],
    });
  }

}
