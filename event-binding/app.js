const app = Vue.createApp({
    data: function () {
        return {
            counter: 0,
            error: "",
            name: "",
        };
    },
    methods: {
        add: function (num) {
            this.error = "";
            this.counter += num;
        },
        remove: function (num) {
            if (this.counter > 0) this.counter -= num;
            else this.error = "You can't reduce less than zero";
        },
        setName(event) {
            this.name = event.target.value;
            console.log(event);
        },
        setNameV2(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
        submitForm(event) {
            event.preventDefault();
            console.log("Form Submitted");
        },
    },
});
app.mount("#user-goals");
