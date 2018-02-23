var sample1;
var sample2;
var result1;
var result2;

var conversionRate1 = result1/sample1;
var conversionRate2 = result2/sample2;

function stdError() {
    var stdError1 = Math.sqrt((conversionRate1*(1-conversionRate1)/sample1));
    var stdError2 = Math.sqrt((conversionRate2*(1-conversionRate2)/sample2));
};

function confidenceConversionRateLimit () {
    var conLimit1_From; 
    if (conversionRate1 - 1.96 * stdError1 < 0) {
        conLimit1_From = 0;
    } else {
        conLimit1_From = conversionRate1 - 1.96*stdError1;
    }

    var conLimit1_To;
    if (conversionRate1 + 1.96 * stdError1 < 0) {
        conLimit1_To = 0;
    } else {
        conLimit1_To = conversionRate1 + 1.96 * stdError1;
    }

    var conLimit2_From;
    if (conversionRate2 - 1.96 * stdError2 < 0) {
        conLimit2_From = 0;
    } else {
        conLimit2_From = conversionRate2 - 1.96 * stdError2;
    }

    var conLimit2_To;
    if (conversionRate2 + 1.96 * stdError2 < 0) {
        conLimit2_To = 0;
    } else {
        conLimit2_To = conversionRate2 + 1.96 * stdError2;
    }
}

function zValue() {
    var zVal = (conversionRate1-conversionRate2)/Math.sqrt(Math.pow(stdError1,2)+POWER(stdError2,2));
    var p = ((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3;
}
