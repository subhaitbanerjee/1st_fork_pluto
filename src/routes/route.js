const express = require('express');
const abc = require('../introduction/intro')
const module1 = require('../logger/logger')
const router = express.Router();
var module2=require ('../util/helper.js')
var module3=require ('../validator/formatter')  




router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});
router.get('/test-subhajit', function (req, res) {
    module1.welcome()
    res.send('my 1st api')                                              // welcome
});


router.get('/test-datetimemonth', function (req, res) {
    //console.log('My batch is', dt.names)
    module2.printDate()                                                 //date time month
    module2.printMonth()
    module2.getBatchInfo()
    res.send('My date api')
   
});


router.get('/test-trim', function (req, res) {                  //trim uppercase lowercase
    module3.trim()

    module3.changetoLowerCase()

    module3.changeToUpperCase()
    res.send('My third api')

});



router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason