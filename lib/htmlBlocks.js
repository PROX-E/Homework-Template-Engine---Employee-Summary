const headerBlock = function () {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="https://kit.fontawesome.com/20b7bd973d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Team Page</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-dark">
            <div class="container">
                <h1 class="display-4 text-light">My Team</h1>
                <h1 class="display-4 text-light"><i class="fas fa-users"></i></h1>
            </div>
        </div>
        <!-- Start of Cards -->
        <div class = "container">
            <div class="col-md-12">
                <div class="row">

    <!---===============END OF HEAD CODE BLOCK====================-->`
};
/*================================================================================================================================*/


const managerBlock = function (data) {
    return `<div class="card m-2">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-briefcase"></i> Manager</h2>
    </div>
    <div class= "card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span>${data.email}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Office Number: <span>${data.officeNumber}</span></p>
            </div>
    </div>
</div>
<!---===============END OF MANAGER CODE BLOCK====================-->`
};

/*================================================================================================================================*/

const engineerBlock = function (data) {
    return ` <div class="card m-2">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-screwdriver"></i> Engineer</h2>
    </div>
    <div class= "card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span>${data.email}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">GitHub: <span>${data.github}</span></p>
            </div>
    </div>
</div>
<!---===============END OF ENGINEER CODE BLOCK====================-->`
};

/*================================================================================================================================*/

const internBlock = function (data) {
    return `<div class="card m-2">
    <div class="card-header">
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-university"></i> Intern</h2>
    </div>
    <div class= "card-body">
            <div class="list-group">
                <p class="list-group-item list-group-item-action list-group-item-dark">ID: <span>${data.id}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">Email: <span>${data.email}</span></p>
                <p class="list-group-item list-group-item-action list-group-item-dark">GitHub: <span>${data.school}</span></p>
            </div>
    </div>
</div>
<!---===============END OF INTERN CODE BLOCK====================-->`
};

/*================================================================================================================================*/

const footerBlock = function() {
    return `</div>
    </div>
</div>  
</body>
</html>`
};

module.exports = {
    manager: managerBlock,
    engineer: engineerBlock,
    intern: internBlock,
    header: headerBlock,
    footer: footerBlock,
}