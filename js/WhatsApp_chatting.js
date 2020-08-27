var app = new Vue({
    el: '#chat',
    data: {
        msg: "",
        isActive: true,
        isSearchActive: false,
        isattchActive: false,
        // msg1: app2.msg1,
        // massages1: app2.massages1,

        massages: ['Hello', 'How are you'],
    },


    methods: {

        arr_msg: function () {
            this.massages.push(this.msg)
            console.log(this.massages)
            // this.msg = ""

        },
        time: function () {
            var time = new Date();
            var Time = time.toLocaleTimeString();
            return Time;
        },
        search_toggle: function () {
            return this.isSearchActive = !this.isSearchActive
        },
        attach_toggle: function () {
            return this.isattchActive = !this.isattchActive
        }

    }

})

var app2 = new Vue({
    el: '#chat_1',
    data: {
        msg1: "",
        isActive: true,
        isSearchActive: false,
        isattchActive: false,
        msg: app.msg,
        massages: app.massages,

    },



    methods: {

        arr_msg1: function () {
            this.massages.push(this.msg1)
            console.log(this.massages)
            // this.msg1 = ""

        },
        time: function () {
            var time = new Date();
            var Time = time.toLocaleTimeString();
            return Time;
        },
        search_toggle: function () {
            return this.isSearchActive = !this.isSearchActive
        },
        attach_toggle: function () {
            return this.isattchActive = !this.isattchActive
        },


    }

})

//WhatsApp color codes
//text -- #6cea91---#dcf8c6;----( #cfe9ba----#fff....#e5ddd5 == rgba(229, 221, 213, 1))