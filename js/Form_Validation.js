const app = new Vue({
    el: '#form',
    data: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        biodata: "",
    },
    computed: {
        _firstName() {
            return /^[a-zA-Z ]+$/.test(this.firstname) && this.firstname.length > 2
        },
        _lastName() {
            return /^[a-zA-Z ]+$/.test(this.lastname) && this.lastname.length > 2
        },
        _email() {
            return /^[a-zA-Z0-9@. ]+$/.test(this.email) && this.email.length > 2
        },
        _password() {
            return /^[a-zA-Z0-9@. ]+$/.test(this.password) && this.password.length > 8
        },
        _biodata() {
            return /^[a-zA-Z ]+$/.test(this.biodata) && this.biodata.length > 20
        },
    }
})