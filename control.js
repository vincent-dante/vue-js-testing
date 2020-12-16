var app = new Vue({
  el: "#app",
  data() {
    return {
      userList: [],
      formShow: false,
      name: null,
      username: null,
      email: null
    };
  },
  methods: {
    edit: function (userid) {
      this.formShow = true;
      let x = this.userList.find(({ id }) => id === userid);
      //console.log(this.userList[id]);
      console.log(x);
      this.name = x.name;
      this.username = x.username;
      this.email = x.email;
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
