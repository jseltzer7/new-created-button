import { Component, ComponentInterface, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'new-button',
  styleUrl: 'new-button.css',
  shadow: true,
})
export class NewButton implements ComponentInterface {

  @Prop({mutable: true}) text: string;

  render() {
    return (
      <Host>
        <button>{this.text}</button>
      </Host>
      
    );
  }

}
