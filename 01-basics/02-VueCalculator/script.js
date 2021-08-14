import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      chosenRadio: { value: `sum`, operator: '➕' },
      radioButtons: [
        { value: `sum`, operator: `➕` },
        { value: `subtract`, operator: `➖` },
        { value: `multiply`, operator: `✖` },
        { value: `divide`, operator: `➗` },
      ],
    };
  },
  computed: {
    result() {
      switch (this.chosenRadio.value) {
        case `sum`:
          return +this.firstNumber + +this.secondNumber;
        case `subtract`:
          return +this.firstNumber - +this.secondNumber;
        case `multiply`:
          return +this.firstNumber * +this.secondNumber;
        case `divide`:
          return +this.firstNumber / +this.secondNumber;
        default:
          return +this.firstNumber + +this.secondNumber;
      }
    },
  },
}).mount('#app');

window.vm = app;
