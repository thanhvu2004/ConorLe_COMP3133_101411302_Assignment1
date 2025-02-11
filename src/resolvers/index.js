const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");
const User = require("../models/User");

const SECRET_KEY = "your_secret_key";

const resolvers = {
  Query: {
    login: async (parent, args) => {
      const user = await User.findOne({ username: args.username });
      if (!user) {
        throw new Error("User not found");
      }
      const isMatch = await bcrypt.compare(args.password, user.password);
      if (!isMatch) {
        throw new Error("Invalid credentials");
      }
      const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
        expiresIn: "1h",
      });
      return token;
    },
    searchEmployeeById: (parent, args) => {
      return Employee.findById(args.eid);
    },
    searchEmployeeByDesignationOrDepartment: (parent, args) => {
      return Employee.find({
        $or: [
          { designation: args.designation },
          { department: args.department },
        ],
      });
    },
  },
  Mutation: {
    signup: async (parent, args) => {
      const hashedPassword = await bcrypt.hash(args.password, 12);
      const user = new User({
        username: args.username,
        password: hashedPassword,
      });
      await user.save();
      const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
        expiresIn: "1h",
      });
      return token;
    },
    addEmployee: (parent, args) => {
      let employee = new Employee({
        name: args.name,
        designation: args.designation,
        department: args.department,
      });
      return employee.save();
    },
    updateEmployeeById: (parent, args) => {
      return Employee.findByIdAndUpdate(
        args.eid,
        {
          name: args.name,
          designation: args.designation,
          department: args.department,
        },
        { new: true }
      );
    },
    deleteEmployeeById: (parent, args) => {
      return Employee.findByIdAndRemove(args.eid);
    },
  },
};

module.exports = resolvers;