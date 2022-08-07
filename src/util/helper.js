

function printDate()
{
    let date=(Date());
    console.log("Date is--->" +date);
}
function printMonth()
{
    let month=(Date());
    console.log("Month is---->"+month);
}
function getBatchInfo()
{
    let batch=('Plutonium, W3D3, the topic for today is Nodejs module system');
    console.log("Details---->"+batch);
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo