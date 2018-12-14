new Vue({
  el: '#root',

  template: `
  <div>
    <h3>My Identicon Generator</h3>
    <div>
      Input
      <input @input="onInput" :value="inputText"/>
    </div>
  
    <div>
      Output
      <!-- v-html inserts bound property as raw unescaped html -->
      <div v-html="identicon"></div>
    </div>
  </div>
`,

  // Data with initial values
  data: {
    inputText: ''
  },
  // derived data elements
  computed: {
    identicon() {
      return jdenticon.toSvg(this.inputText, 200 /* 200 pixels */);
    }
  },
  // methods invoked form component to mutate data and perform side effects
  methods: {
    onInput(event) {
      this.inputText = event.target.value;
    }
  }
});
