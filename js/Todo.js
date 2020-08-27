const app = new Vue({
    el: '#app',
    data: {
        currentTodo: '',
        currentEditingIndex: -1,
        todos: ['todo1', 'todo2', 'todo3', 'todo4'],
        // objTodos: {
        //     1: 'todo',
        //     2: 'todo',
        //     3: 'todo',
        //     4: 'todo',
        // }
    },
    methods: {
        addTodo() {
            if (this.currentEditingIndex > -1) {
                console.log(this.currentTodo, this.currentEditingIndex);
                this.todos[this.currentEditingIndex] = this.currentTodo;
                this.currentEditingIndex = -1
            } else {
                console.log(this.currentTodo);
                this.todos.push(this.currentTodo);
            }
            this.currentTodo = '';
        },
        editTodo(todo, index) {
            console.log(todo, index);
            this.currentTodo = todo;
            this.currentEditingIndex = index;
        },
        // removeObjTodo(key) {
        //     delete this.objTodos[key];
        //     this.$forceUpdate();
        // },
        removeTodo(index) {
            // console.log('remove', this.todos[index]);
            // // remove from array can be done with filter or splice
            // // with filter
            // const arr = this.todos.filter(function (t, i) {
            //     return i !== index
            // });
            // this.todos = arr;

            // with splice
            this.todos.splice(index, 1);

        }
    }
})