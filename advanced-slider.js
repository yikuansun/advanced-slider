class spotInput extends HTMLElement {
    constructor(...args) {
      super(...args);
      
      // Attaches a shadow root to your custom element.
      const shadowRoot = this.attachShadow({mode: 'open'});
      
      // Defines the "real" input element.
      let inputElement = document.createElement('input');
      inputElement.setAttribute('type', this.getAttribute('type'));
      
      inputElement.addEventListener('focus', () => {
        console.log('focus on spot input');
      });
      
      // Appends the input into the shadow root.
      shadowRoot.appendChild(inputElement);
    }
  };
  
  customElements.define('spot-input', spotInput);