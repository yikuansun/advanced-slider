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
        }.bind(this));
        this.numberElement.addEventListener("input", function() {
            this.value = this.numberElement.value;
        }.bind(this));

        shadowRoot.appendChild(this.rangeElement);
        shadowRoot.appendChild(this.numberElement);
    }
    static get observedAttributes() { return ["min", "max", "value"]; }
    attributeChangedCallback(name, oldval, newval) {
        this[name] = newval;
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
    set min(newval) {
        this.rangeElement.min = newval;
    }
    set max(newval) {
        this.rangeElement.max = newval;
    }
    set value(newval) {
        this.rangeElement.value = newval;
        this.numberElement.value = newval;
    }
    get min() {
        return this.rangeElement.min;
    }
    get max() {
        return this.rangeElement.max;
    }
    get value() {
        return this.rangeElement.value;
    }
};
  
customElements.define('advanced-slider', advancedSlider);