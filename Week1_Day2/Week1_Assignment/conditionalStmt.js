

function launchBrowser(name){

    var browserName =name;

    if(browserName == "chrome"){
        console.log("Bowser Name is" + name)
    } else {
        console.log("Unknown Browser is " + name)
    }

}

function runTests(testType){

    var type=testType;

    switch(type){

        case "smoke":
           console.log("Smoke Test");
           break;

        case "sanity":
            console.log("Sanity test");
            break;

        case "regression":
            console.log("Regression test");
            break;

        default :
            console.log("Smoke Test");
            break;

    }    

}

launchBrowser("chrome");
launchBrowser("firefox");   

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("functional");