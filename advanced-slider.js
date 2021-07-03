class advancedSlider extends HTMLElement {
    constructor(...args) {
        super(...args);
      
        const shadowRoot = this.attachShadow({mode: "open"});

        this.rangeElement = document.createElement("input");
        this.rangeElement.setAttribute("type", "range");
        this.rangeElement.addEventListener("input", function() {
            this.value = this.rangeElement.value;
        }.bind(this));

        shadowRoot.appendChild(this.rangeElement);
    }
    connectedCallback() {
        var min = this.getAttribute("min");
        var max = this.getAttribute("max");
        this.value = this.getAttribute("value");

        this.rangeElement.setAttribute("min", min);
        this.rangeElement.setAttribute("max", max);
        this.rangeElement.setAttribute("value", this.value);
    }
};
  
customElements.define('advanced-slider', advancedSlider);