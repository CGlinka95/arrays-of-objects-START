// MIMIC of retrieving external data from an API
// 
// random user:
// https://randomuser.me/api/portraits/men/99.jpg
// https://randomuser.me/api/portraits/women/99.jpg
// 
// Server Code API:
// - http verbs
// - get page.com
// - post send
// - delete
// - update
// 
// Route Path: employees
// app.get('/employees', (req, res)=>{
//      //req to a database get the employees SQL
//      //noSQL sata
//      res.send([{},{},{}])
// })
// 
// forms get and post:
// app.get('/employees', (req, res)=>{
//      //create a new employee
//      //noSQL sata
//      res.send([success])
// })
// localhost:5000/employees
// 
// Decide on a model for employee
// - id:1
// - fullname,
// - email,
// - phone,
// - avatar

// Data Model ====> ui VIEW      MVC Architectural
// - M = data model
// - V = view ui see
// - C = control what happens
const employees = [
    {
        id:1,
        fullname: "Christopher Glinka",
        phone: null,
        email: 'glinkachris@gmail.com',
        avatar: 'https://randomuser.me/api/portraits/men/69.jpg'
    },
    {
        id:2,
        fullname: "Phil Fonden",
        phone: '780 678 3299',
        email: 'phil@nait.ca',
        avatar: 'https://randomuser.me/api/portraits/men/38.jpg'
    },
    {
        id:3,
        fullname: "Julie Grass",
        phone: '780 378 1234',
        email: 'julie@gmail.com',
        avatar: 'https://randomuser.me/api/portraits/women/69.jpg'
    }
]