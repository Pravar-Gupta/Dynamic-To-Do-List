new Vue({
    el: "#tasklist",
    data: {
        title: "to do list",
        tasks: [
            { name: "Start assignment 4"},
            { name: "Create Github Repo"},
            { name: "Upload data files and code"}
        ]
    },
    methods: {
        newItem: function () {
            if (!this.tasks.name) {
                return;
            }
            this.tasks.push({
                name: this.tasks.name,
                del: ""
            });
            this.tasks.name = "";
        },
        delItem: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
    }
});