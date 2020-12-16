var app = new Vue({
  el: "#app",
  data() {
    return {
      todosList: []
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        this.todosList = [...response.data].slice(0, 10);
      });
  }
});
