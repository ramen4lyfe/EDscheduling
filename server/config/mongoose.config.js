const mongoose = require("mongoose");

// Define the names of the three databases we will use
const bookingDBName = "bookings";
const employeeDBName = "employees";
const shiftDBName = "shifts";

// Connect to the MongoDB databases using the Mongoose library
mongoose
  .connect(`mongodb://localhost/${bookingDBName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to ${bookingDBName} database!`))
  .catch((err) => console.log(err));

mongoose
  .createConnection(`mongodb://localhost/${employeeDBName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to ${employeeDBName} database!`))
  .catch((err) => console.log(err));

mongoose
  .createConnection(`mongodb://localhost/${shiftDBName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to ${shiftDBName} database!`))
  .catch((err) => console.log(err));

// Export the Mongoose library to be used in other files in our application
module.exports = mongoose;
