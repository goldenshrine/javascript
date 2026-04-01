let DATA = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  veiwData() {
    console.log("data = ", DATA);
  }
}

class admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "some new vlaue";
  }
}

let student1 = new User("prince", "abc@email.com");
let student2 = new User("monica", "monaco@email.com");

let teacher1 = new User("genos", "abc@email.com");

let admin1 = new User("admin", "admin@email.com");
