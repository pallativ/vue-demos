const app = Vue.createApp({
    data: function () {
        return {
            courseGoalA: "Goal A",
            courseGoalB: "Goal B",
            vueLink: "https://google.com",
            htmlContent: "<h2>Html rendering</h2>",
        };
    },
    methods: {
        outputGoal: function () {
            const randNumber = Math.random();
            console.log(
                "Method Call:" +
                    randNumber +
                    ":" +
                    this.courseGoalA +
                    ":" +
                    this.courseGoalB
            );
            if (randNumber < 0.5) return this.courseGoalA;
            else return this.courseGoalB;
        },
    },
});
app.mount("#user-goals");
