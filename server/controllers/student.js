const getStudents = async (req, res) => {
   try {
      const allStudents = await student.find();
      res.status(200).json(allStudents);
   }catch(err){
      res.status(404).json({message: err.message});
   }
};
const createStudent = async (req, res) => {
   const student = req.body;
   const newStudent = new studentModel(student);
   try{
      await newStudent.save();
      res.status(201).json(newStudent);
   } catch (err) {
      res.status(409).json({ message: err.message });
   }
}
module.exports = {
   getStudents,
   createStudent,
}