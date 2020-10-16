var studentData= require('./../models/student');
var addressData= require('./../models/address');


function getAll(req,res){
    var result = {
                success: false,
                payload: null,
                message: ""
            }
            studentData.find().populate('address').exec((err,docs)=>{ 
                if (err){ 
                    //console.log(err);
                    result = {
                        success: false,
                        payload: null,
                        message: err
                    } 
                    res.json(result);
                } 
                else{ 
                    result = {
                        success: true,
                        payload: docs,
                        message: 'Success'
                    }
                    res.json(result);
                } 
            });
          //  res.json(result);
}
function saveStudents(req,res){
    var result = {
        success: false,
        message: ""
    }
    if (req.body.name && req.body.age && req.body.maths && req.body.science && req.body.english && req.body.total && req.body.active && req.body.address && req.body.name != '' && req.body.age != ''&& req.body.maths != '' && req.body.science != ''&& req.body.english != '' && req.body.total != ''&& req.body.active != '') {
      
        var new_address = new addressData(req.body.address);
        new_address.save().then(resultss=>{
            var new_stud = new studentData({name: req.body.name,
                age: req.body.age,
                maths: req.body.maths, 
                science: req.body.science,
                english:req.body.english,
                total:req.body.total,
                active:req.body.active,
                address:resultss._id
            }) ;
              
            new_stud.save(function(err,doc){ 
       
                if (err){ 
                    //console.log(err);
                    result = {
                        success: false,
                        message: err
                    } 
                    res.json(result);
                } 
                else{
                    result.success = true;
                    result.message = "Success";
                }
                res.json(result);
            });   

        });
      
     
    }
    else {
        result.success = false;
        result.message = "please enter all details";
        res.json(result);

    }
}


 function editStudent(req,res){
    var result = {
        success: false,
        message: ""
    }
    if (req.body.name && req.body.age && req.body.maths && req.body.science && req.body.english && req.body.total && req.body.active && req.body.name != '' && req.body.age != ''&& req.body.maths != '' && req.body.science != ''&& req.body.english != '' && req.body.total != ''&& req.body.active != '') {
        var new_stud = new studentData({name: req.body.name,
            age: req.body.age,
            maths: req.body.maths, 
            science: req.body.science,
            english:req.body.english,
            total:req.body.total
        }) ;
            studentData.findByIdAndUpdate( req.body.id ,  
                new_stud,null, function (err,doc){ 
   
            if (err){ 
                //console.log(err);
                result = {
                    success: false,
                    message: err
                } 
                res.json(result);
            } 
            else{
                result.success = true;
                result.message = "Success";
            }
            res.json(result);
        });
     
    }
    else {
        result.success = false;
        result.message = "please enter all details";
        res.json(result);

    }

}


    function deleteStudent(req,res){
var result = {
    success: false,
    message: ""
}

      
        studentData.findOneAndRemove({_id: req.body.id }, function (err,doc){ 

        if (err){ 
            //console.log(err);
            result = {
                success: false,
                message: err
            } 
            res.json(result);
        } 
        else{
            result.success = true;
            result.message = "Success";
        }
        res.json(result);
    });
 

}

function disableStudent(req,res){
    var result = {
        success: false,
        message: ""
    }
    
    var new_stud = new studentData({active:0}) ;  
    studentData.findOneAndUpdate({_id: req.body.id },  
        new_stud,null, function (err,doc){ 

    if (err){ 
        //console.log(err);
        result = {
            success: false,
            message: err
        } 
        res.json(result);
    } 
    else{
        result.success = true;
        result.message = "Success";
    }
    res.json(result);
});
     
    
    }
module.exports={
    getAll,
    saveStudents,
    editStudent,
    deleteStudent,
    disableStudent
}