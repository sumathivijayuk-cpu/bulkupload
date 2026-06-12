
enum ENVIRONMENT{
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
    
}

function runTests(envTesting:ENVIRONMENT) : void{
    console.log(`Test results are ${envTesting}`)
}

runTests(ENVIRONMENT.LOCAL)
runTests(ENVIRONMENT.DEVELOPMENT)
runTests(ENVIRONMENT.STAGING)
runTests(ENVIRONMENT.PRODUCTION)

