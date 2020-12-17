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
          username: self.username,
          email: self.email
        }
      }).then((response) => {
        let res = response.data;
        let x = self.userList.find((user) => user.id === self.id);
        x.name = res.name;
        x.username = res.username;
        x.email = res.email;
      });
    },
    delete_user: function (id) {
      let filterArray = this.userList.filter((user) => user.id !== id);
      console.log(filterArray);
      this.userList = filterArray;
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
