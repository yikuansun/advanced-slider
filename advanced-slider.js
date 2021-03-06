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
        this.rangeElement.addEventListener("change", function() {
            this.dispatchEvent(new Event("change", {
                bubbles: true,
                cancelable: true,
            }));
        }.bind(this));
        this.numberElement.addEventListener("change", function() {
            this.dispatchEvent(new Event("change", {
                bubbles: true,
                cancelable: true,
            }));
        }.bind(this));

        shadowRoot.appendChild(this.rangeElement);
        shadowRoot.appendChild(this.numberElement);
    }
    static get observedAttributes() { return ["min", "max", "value", "step"]; }
    attributeChangedCallback(name, oldval, newval) {
        this[name] = newval;
    }
    connectedCallback() {
        this.min = this.getAttribute("min");
        this.max = this.getAttribute("max");
        this.value = this.getAttribute("value");
        this.step = this.getAttribute("step");

        this.rangeElement.setAttribute("min", this.min);
        this.rangeElement.setAttribute("max", this.max);
        this.rangeElement.setAttribute("value", this.value);
        this.rangeElement.setAttribute("step", this.step);

        this.numberElement.setAttribute("value", this.value);
        this.numberElement.setAttribute("step", this.step);
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
    set step(newval) {
        this.rangeElement.step = newval;
        this.numberElement.step = newval;
    }
    get min() {
        return this.rangeElement.min;
    }
    get max() {
        return this.rangeElement.max;
    }
    get value() {
        return this.numberElement.value;
    }
    get step() {
        return this.rangeElement.step;
    }
};
  
customElements.define('advanced-slider', advancedSlider);