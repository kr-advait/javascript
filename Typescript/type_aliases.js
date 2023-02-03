// Type aliases - allows us to create allows us to create custom types
function createUser(user) {
    console.log("user created...");
    console.log("name - ".concat(user.name, ", age - ").concat(user.age, ", work - ").concat(JSON.stringify(user.work)));
}
createUser({ name: "advait", age: 20, work: { laptop: "dell", tech: "backend" } });
