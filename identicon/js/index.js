new Vue({
  el: '#root',

  // Data with initial values
  data: {
    inputText: ''
  },
  // derived data elements
  computed:{

  },
  // methods invoked form component to mutate data and perform side effects
  methods: {
    onInput(event) {
      this.inputText = event.target.value;
    }
  }
});
