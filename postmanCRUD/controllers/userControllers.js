const fs = require("fs");
const { join } = require("path");

const userSignup = (req, res) => {
  // console.log(req.body);
  const { name, age, address, mobile } = req.body;
  if (!name || !age || !address || !mobile) {
    res.status(400).send({ message: "Provide All Required Fields" });
  } else {
    let allUsers = JSON.parse(
      fs.readFileSync(join(__dirname, "..", "json", "users.json"), "utf-8")
    );
    let isUser = allUsers.find((e) => e.mobile == mobile);
    if (isUser) {
      res.status(400).send({ message: "User Already Registered" });
    } else {
      allUsers.push({ name, age, address, mobile });
      fs.writeFileSync(
        join(__dirname, "..", "json", "users.json"),
        JSON.stringify(allUsers)
      );
      res.status(201).send({ message: "User Registraion Successfull" });
    }
  }
};

// !get user

const getUser = (req, res) => {
  //   console.log(req.body);
  const { mobile } = req.body;
  if (!mobile) {
    res.status(400).send({ message: "Provide Mobile Number" });
  } else {
    let allUsers = JSON.parse(
      fs.readFileSync(join(__dirname, "..", "json", "users.json"), "utf-8")
    );
    let user = allUsers.find((e) => e.mobile == mobile);
    if (!user) {
      res.status(401).send({ message: "User Not Registered" });
    } else {
      res.status(200).send(user);
    }
  }
};

// !update user
const updateUser = (req, res) => {
  //   console.log(req.params);
  const { mobile } = req.params;
  let allUsers = JSON.parse(
    fs.readFileSync(join(__dirname, "..", "json", "users.json"), "utf-8")
  );
  let user = allUsers.find((e) => e.mobile == mobile);
  if (user) {
    let updateData = req.body;
    let updatedUser = { ...user, ...updateData };
    allUsers = allUsers.map((e) => {
      if (e.mobile == updatedUser.mobile) {
        return updatedUser;
      }
      return e;
    });
    fs.writeFileSync(
      join(__dirname, "..", "json", "users.json"),
      JSON.stringify(allUsers)
    );
    return res.status(200).send({ message: "User updated successfully" });
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
};

module.exports = { userSignup, getUser, updateUser };
