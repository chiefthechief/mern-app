const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
   registrationNumber: Number,
   name: String,
   grade: String,
   section: {
      type: String,
      default: "A",
      subjects: [String],
   }
});
const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;