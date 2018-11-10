const myDummyObject = {
  name: "Mike",
  age: 50,
  async tellName() {
    console.log("Tell");
  },
  async tellAge() {
    await console.log("Tell age", this.age);
    console.log("Say something else");
  }
};

const tellAge = myDummyObject.tellAge;
export { tellAge };
