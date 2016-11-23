// Extend Polymer.Element base class
class MyElement extends Polymer.Element {

  static get is() {
    return 'my-element';
  }

  static get config() {
    return {
      /* properties, observers meta data */
      properties: {
        foo: {
          type: String,
          value: 'hello'
        }
      }
    }
  }

  // constructor() {
  //   super();
  //
  //   console.log('created');
  // }

  connectedCallback() {
    super.connectedCallback();

    this.textContent = this.foo;

    console.log('attached', this.foo);

    console.log('props:');
    for (var k in this) {
      if (this.hasOwnProperty(k)) {
        console.log(k);
      }
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(attrName, oldVal, newVal);
  }

  //...
}

// Register custom element definition using standard platform API
customElements.define(MyElement.is, MyElement);
