import { RevoGrid as IRev } from '@revolist/revogrid/dist/types/interfaces';
import { VNode } from '@revolist/revogrid/dist/types/stencil-public-runtime';
import { Edition } from '@revolist/revogrid/dist/types/interfaces';


class CustomEditor {
  public element: Element | null = null;
  public editCell: Edition.EditCell | null = null;
  private renderedElement: HTMLElement | any | null = null;

  constructor(
    public column: any,
    public saveCallback: (value: any) => void,
    public closeCallback: () => void
  ) { }

  componentDidRender(): any {}  // optional, called after editor rendered
  disconnectedCallback(): any {}   // optional, called after editor destroyed

  render(createComponent: IRev.HyperFunc<VNode>): any {
    const input = createComponent('edit-' + this.column.selector , {
      styles: { width: '100%', height: '100%', margin: 0, display: 'block'},
      id: 'currentFieldContainerInput',
      value: this.editCell.model[this.editCell.prop],
      class: 'fit-container',
      instance: this,
    }, this.editCell.val);

    return input;
  }
}

export class ColumnTypeCustom {
  public selector;

  constructor() { }
  readonly editor = CustomEditor;

  cellTemplate = (createElement, props) => {
    return createElement('show-' + props.column.selector,
      {
        styles: { width: '100%', height: '100%', margin: 0, display: 'block' },
        class: 'fit-container',
        value: props.model[props.prop]
      },
      props.model[props.prop]);
  }

}