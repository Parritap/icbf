const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use (cors());


// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)



const userRoutes = require('./src/routes/users.routes')
// Users middleware 
app.use('/api/users', userRoutes);


const beneficiarioRoutes = require('./src/routes/beneficiario.routes.js')
// Beneficiario middleware
app.use('/api/beneficiario', beneficiarioRoutes);

const loginRoutes = require('./src/routes/login.routes.js')
app.use('/api/login', loginRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); 