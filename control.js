var app = new Vue({
  el: "#app",
  data() {
    return {
      userList: [],
      formShow: false,
      name: null,
      username: null,
      email: null,
      id: null
    };
  },
  methods: {
    edit: function (userid) {
      this.formShow = true;
      let x = this.userList.find(({ id }) => id === userid);
      this.name = x.name;
      this.username = x.username;
      this.email = x.email;
      this.id = x.id;
    },
    save: function () {
      let self = this;
      axios({
        method: "put",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        data: {
          id: self.id,
          name: self.name,
          surname: self.username,
          email: self.email
        }
      }).then((response) => {
        var x = self.userList.find(({ id }) => id === response.id);
        console.log(x);
        /*         x.name = response.name;
        x.username = response.username;
        x.email = response.email; */
      });
    }
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        this.userList = [...response.data].slice(0, 10);
      });
  }
});
