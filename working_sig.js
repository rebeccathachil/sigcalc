var sample1 = 1000;
var sample2 = 1500;
var result1 = 500;
var result2 = 500;

var conversionRate1 = result1/sample1;
var conversionRate2 = result2/sample2;


var stdError1 = Math.sqrt((conversionRate1*(1-conversionRate1)/sample1));
var stdError2 = Math.sqrt((conversionRate2*(1-conversionRate2)/sample2));


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


var zVal = (conversionRate1-conversionRate2)/Math.sqrt(Math.pow(stdError1,2)+Math.pow(stdError2,2));

    
var t = 1/(1+0.3275911*Math.abs(zVal));
var a1 =  0.254829592;
var a2 = -0.284496736;
var a3 =  1.421413741;
var a4 = -1.453152027;
var a5 =  1.061405429;
var erf = 1-(((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-zVal*zVal);
var sign = 1;
var p;

if(zVal < 0)
{
    sign = -1;
} else {
  p = (1/2)*(1+sign*erf);
}


var sig;
if (p<0.05 || p>0.95) {
    sig = "YES";
} else {
    sig = "NO";
}

console.log(sig);



