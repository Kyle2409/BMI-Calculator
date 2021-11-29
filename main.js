function calculateBasal() {
    var sex = document.basalForm.sex.value;
    var age = document.basalForm.age.value;
    var weight = document.basalForm.weight.value;
    var height = document.basalForm.height.value;
    var activityLevel = document.basalForm.activityLevel.value;


    if (document.basalForm.sex.value == "female") {
        basal = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        return document.basalForm.basal.value = basal.toFixed(2) + " Kcals";
    } else {
        basal = 66.47 + (6.23 * weight) + (12.7 * height) - (6.755 * age);
        return document.basalForm.basal.value = basal.toFixed(2) + " Kcals";
    };
}
if (document.basalForm.sex.value == "male") {
    basal = 655 + (4.35 * weight) + (4.7 * height);
    return document.basalForm.basal.value = basal.toFixed(2) + " Kcals";
} else {
    basal = 66.47 + (6.23 * weight) + (12.7 * height);
    return document.basalForm.basal.value = basal.toFixed(2) + " Kcals";
};


window.codename = function () {
    console.log(document.getElementById("Tipo").value);
    if (document.getElementById("Tipo").value == "1") {
        document.getElementById("firstname").disabled = "disabled";
    } else {
        document.getElementById("firstname").disabled = "";
    }
    return true;
}

function calculatePal() {
    var sex = document.basalForm.sex.value;
    var age = document.basalForm.age.value;
    var weight = document.basalForm.weight.value;
    var height = document.basalForm.height.value;
    var activityLevel = document.basalForm.activityLevel.value;


    if (document.basalForm.activityLevel.value == "sedentary") {
        activityLevel = 1.2
        var pal = basal * activityLevel;
        return document.basalForm.pal.value = pal.toFixed(2) + " Kcals";
    } else if (document.basalForm.activityLevel.value == "lightExercise") {
        activityLevel = 1.375
        var pal = basal * activityLevel;
        return document.basalForm.pal.value = pal.toFixed(2) + " Kcals";
    } else if (document.basalForm.activityLevel.value == "moderateExercise") {
        activityLevel = 1.55
        var pal = basal * activityLevel;
        return document.basalForm.pal.value = pal.toFixed(2) + " Kcals";
    } else if (document.basalForm.activityLevel.value == "veryActive") {
        activityLevel = 1.725
        var pal = basal * activityLevel;
        return document.basalForm.pal.value = pal.toFixed(2) + " Kcals";
    } else {
        activityLevel = 1.9
        var pal = basal * activityLevel;
        return document.basalForm.pal.value = pal.toFixed(2) + " Kcals";
    }
}

function calculateBmi() {
    var height = document.basalForm.height.value;
    var weight = document.basalForm.weight.value;
    var bmi = (weight / (height * height)) * 703;
    return document.basalForm.bmi.value = bmi.toFixed(2);
}

function weightCat() {
    bmi = document.basalForm.bmi.value;

    if (bmi > 39.9) {
        return document.basalForm.weightCategory.value = "Morbidly obese";
    } else if (bmi > 29.9) {
        return document.basalForm.weightCategory.value = "Obese";
    } else if (bmi > 24.9) {
        return document.basalForm.weightCategory.value = "Overweight";
    } else if (bmi > 18.5) {
        return document.basalForm.weightCategory.value = "Normal healthy";
    } else {
        return document.basalForm.weightCategory.value = "Underweight";
    };

};

function eat() {
    var pal = document.basalForm.pal.value;
    var palx = parseInt(pal, 10);
    console.log(palx);
    var basal = document.basalForm.basal.value;
    var basalx = parseInt(basal, 10);
    var calLose = palx - basalx;
    return document.basalForm.calLose.value = "- " + calLose + " Kcals";
}