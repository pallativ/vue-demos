var vm = new Vue({
  el: "#app",
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      console.log(this.enteredValue);
      this.goals.push(this.enteredValue);
    },
  },
});
