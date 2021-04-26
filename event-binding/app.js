const app = Vue.createApp({
    data: function () {
        return {
            counter: 0,
            error: "",
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
    },
});
app.mount("#user-goals");
