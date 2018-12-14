new Vue({
  el: '#root',
  data: {
    inputText: ''
  },
  methods: {
    onInput(event) {
      this.inputText = event.target.value;
    }
  }
});
