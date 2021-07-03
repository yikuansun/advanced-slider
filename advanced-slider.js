class advancedSlider extends HTMLElement {
    constructor(...args) {
        super(...args);
      
        const shadowRoot = this.attachShadow({mode: "open"});

        this.rangeElement = document.createElement("input");
        this.rangeElement.setAttribute("type", "range");
        this.numberElement = document.createElement("input");
        this.numberElement.setAttribute("type", "number");
        this.rangeElement.addEventListener("input", function() {
            this.value = this.rangeElement.value;
            this.numberElement.value = this.value;
        }.bind(this));
        this.numberElement.addEventListener("input", function() {
            this.value = this.numberElement.value;
            this.rangeElement.value = this.value;
        }.bind(this));

        shadowRoot.appendChild(this.rangeElement);
        shadowRoot.appendChild(this.numberElement);
    }
    connectedCallback() {
        var min = this.getAttribute("min");
        var max = this.getAttribute("max");
        this.value = this.getAttribute("value");

        this.rangeElement.setAttribute("min", min);
        this.rangeElement.setAttribute("max", max);
        this.rangeElement.setAttribute("value", this.value);

        this.numberElement.setAttribute("value", this.value);
    }
};
  
customElements.define('advanced-slider', advancedSlider);