
try {
 
    var pageName = getPageName();
    console.log("Page name: " + pageName);
} catch (error) {

    console.error("Error occurred while getting page name: " + error);
}

finally {
    console.log("This block will always execute, regardless of whether there was an error or not.");
}

function getPageName() {
    throw new Error("Page name not found.");
}

function validateNumeric(parameter) {
    if (isNaN(parameter)) {
        throw new Error("Parameter is not a numeric value.");
    } else {
        console.log("Parameter is a numeric value.");
    }
}

try {
    validateNumeric("abc");
} catch (error) {
    console.error("Validation Error: " + error);
}
