var app = new Vue({
  el: "#app",
  data() {
    return {
      userList: [],
      formShow: false,
      name: null,
      username: null,
      email: null,
      id: null,
      saveCondi: "add"
    };
  },
  methods: {
    add_user: function () {
      this.saveCondi = "add";
      this.name = null;
      this.username = null;
      this.email = null;
      this.id = null;
      this.formShow = true;
    },
    edit: function (userid) {
      this.saveCondi = "edit";
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
        url: "https://jsonplaceholder.typicode.com/users/1",
        data: {
          id: self.id,
          name: self.name,
          username: self.username,
          email: self.email
        }
      }).then((response) => {
        if (self.saveCondi === "edit") {
          let res = response.data;
          let x = self.userList.find((user) => user.id === self.id);
          x.name = res.name;
          x.username = res.username;
          x.email = res.email;
        } else {
          let z = self.userList.length + 1;
          self.userList.push({
            id: z,
            name: self.name,
            username: self.username,
            email: self.email
          });
        }
        this.formShow = false;
      });
    },
    delete_user: function (id) {
      let filterArray = this.userList.filter((user) => user.id !== id);
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
