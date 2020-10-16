const express = require('express')
const app = express()

const db = require('./../config/db')

var indexRouter = require('./routes/index');




app.use(express.json()); // support json encoded bodies
app.use(express.static('sample'))
const port = 3000

app.use('/', indexRouter);


// app.get('/', (req, res) => res.send('Hello World!'))


// app.post('/addnewstudent', (req, res) => {
//     var result = {
//         success: false,
//         message: ""
//     }
//     if (req.body.name && req.body.age && req.body.username && req.body.password && req.body.name != '' && req.body.age != '' && req.body.username != '' && req.body.password != '') {
      
//         studentData.create({name: req.body.name,age: req.body.age,username: req.body.username, password: req.body.password,created_at:Date.now(),updated_at:Date.now()}, function (err, doc) {
//             if (err){ 
//                 //console.log(err);
//                 result = {
//                     success: false,
//                     message: err
//                 } 
//                 res.json(result);
//             } 
//             else{
//                 result.success = true;
//                 result.message = "Success";
//             }
//             res.json(result);
//         });
     
//     }
//     else {
//         result.success = false;
//         result.message = "please enter all details";
//         res.json(result);

//     }
// })
// app.post('/savemanystudent', (req, res) => {
//     var result = {
//         success: false,
//         message: ""
//     }
//     if (req.body.students && req.body.students.length>0) {
        
          
//             studentData.insertMany(req.body.students).then(function(){ 
//                 result.success = true;
//                 result.message = "Success";  
//                 res.json(result);
//             }).catch(function(error){ 
//                 result = {
//                     success: false,
//                     message: error
//                 }   
//                 res.json(result);
//             })
          
     
//     }
//     else {
//         result.success = false;
//         result.message = "please enter all details";
//         res.json(result);

//     }
// })
// app.post('/savenewstudent', (req, res) => {
//     var result = {
//         success: false,
//         message: ""
//     }
//     if (req.body.name && req.body.age && req.body.username && req.body.password && req.body.name != '' && req.body.age != '' && req.body.username != '' && req.body.password != '') {
//         var new_stud = new studentData({name: req.body.name,
//             age: req.body.age,
//             username: req.body.username, 
//             password: req.body.password,
//             created_at:Date.now(),
//             updated_at:Date.now()}) ;
          
//         new_stud.save(function(err,doc){ 
   
//             if (err){ 
//                 //console.log(err);
//                 result = {
//                     success: false,
//                     message: err
//                 } 
//                 res.json(result);
//             } 
//             else{
//                 result.success = true;
//                 result.message = "Success";
//             }
//             res.json(result);
//         });
     
//     }
//     else {
//         result.success = false;
//         result.message = "please enter all details";
//         res.json(result);

//     }
// })
// app.get('/getallstudents', (req, res) => {
//     var result = {
//         success: false,
//         payload: null,
//         message: ""
//     }
//     studentData.find( function (err, docs) { 
//         if (err){ 
//             //console.log(err);
//             result = {
//                 success: false,
//                 payload: null,
//                 message: err
//             } 
//             res.json(result);
//         } 
//         else{ 
//             result = {
//                 success: true,
//                 payload: docs,
//                 message: 'Success'
//             }
//             res.json(result);
//         } 
//     });
//   //  res.json(result);

// })
// app.post('/getallstudentsbyage', (req, res) => {
//     var result = {
//         success: false,
//         payload: null,
//         message: ""
//     }

//         studentData.find( req.body , function (err, docs) { 
//             if (err){ 
//                 //console.log(err);
//                 result = {
//                     success: false,
//                     payload: null,
//                     message: err
//                 } 
//                 res.json(result);
//             } 
//             else{ 
//                 result = {
//                     success: true,
//                     payload: docs,
//                     message: 'Success'
//                 }
//                 res.json(result);
//             } 
        
//         });
   
//   //  res.json(result);

// })
// app.put('/editstudent', (req, res) => {
//     var result = {
//         success: false,
//         message: ""
//     }
//     if (req.body.name && req.body.age && req.body.username && req.body.password && req.body.name != '' && req.body.age != '' && req.body.username != '' && req.body.password != '') {
//         var new_stud = {name: req.body.name,
//             age: req.body.age,
//             username: req.body.username, 
//             password: req.body.password,
//             created_at:Date.now(),
//             updated_at:Date.now()} ;
          
//             studentData.findOneAndUpdate({_id: req.body.id },  
//                 new_stud,null, function (err,doc){ 
   
//             if (err){ 
//                 //console.log(err);
//                 result = {
//                     success: false,
//                     message: err
//                 } 
//                 res.json(result);
//             } 
//             else{
//                 result.success = true;
//                 result.message = "Success";
//             }
//             res.json(result);
//         });
     
//     }
//     else {
//         result.success = false;
//         result.message = "please enter all details";
//         res.json(result);

//     }

// })


// app.delete('/deletstudent', (req, res) => {
    
// var result = {
//     success: false,
//     message: ""
// }

      
//         studentData.findOneAndRemove({_id: req.body.id }, function (err,doc){ 

//         if (err){ 
//             //console.log(err);
//             result = {
//                 success: false,
//                 message: err
//             } 
//             res.json(result);
//         } 
//         else{
//             result.success = true;
//             result.message = "Success";
//         }
//         res.json(result);
//     });
 

// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))