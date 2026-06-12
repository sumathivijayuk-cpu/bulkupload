
let browser = "Chrome";

function checkBrowserVersion(callback){

    setTimeout(() => {
        callback()
    }, 120);

}


function callback(){
    
    console.log("Browser version is", browser);
}

checkBrowserVersion(callback);
