const app1 = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        time: new Date(),
        value: 'nagraj suresh',
        flag: false,
    }
})
const app2 = new Vue({
    el: '#app2',
    data: {
        msg2: 'Hi app2',
    },
    /*
     * Computed properties are used to get values from dependent variables
     * They will automatically refreshed on every change detection
     */
    computed: {
        name() {
            return app1.value
        }
    }
})