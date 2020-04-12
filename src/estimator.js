var data = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
};
function getValue() {
    data.periodType = document.getElementById('data-period-type').value;
    data.population = document.getElementById('data-population').value;
    data.timeToElapse = document.getElementById('data-time-to-elapse').value;
    data.reportedCases = document.getElementById('data-reported-cases').value;
    data.reportedCases = document.getElementById('data-total-hospital-beds').value;

    covid19ImpactEstimator(data);
    return data;
};
document.querySelector('#submit').addEventListener('click', getValue)

function calc(data) {

    currentlyInfected_impact = data.reportedCases * 10;
    infectionByRequestedTime_impact = currentlyInfected_impact * n;
    severeCaseByReportedTime_impact = 0.15 * infectionByRequestedTime_impact;
    hospitalBedByRequestedTime_impact = (0.35 * data.totalHospitalBeds) - severeCaseByReportedTime_impact;
    casesForICUByRequestedTime_impact = 0.05 * infectionByRequestedTime_impact;
    casesForVentilatorsByRequestedTime_impact = 0.02 * infectionByRequestedTime_impact;
    dollarsInFlight_impact = infectionByRequestedTime_impact * data.region.avgDailyIncomeInUSD * data.timeToElapse;

    currentlyInfected_severeImpact = data.reportedCases * 50;
    infectionByRequestedTime_severeImpact = currentlyInfected_severeImpact * n;
    severeCaseByReportedTime_severeImpact = 0.15 * infectionByRequestedTime_severeImpact;
    hospitalBedByRequestedTime_severeImpact = (0.35 * data.totalHospitalBeds) - severeCaseByReportedTime_severeImpact;
    casesForICUByRequestedTime_severeImpact = 0.05 * infectionByRequestedTime_severeImpact;
    casesForVentilatorsByRequestedTime_severeImpact = 0.02 * infectionByRequestedTime_severeImpact;
    dollarsInFlight_severeImpact = infectionByRequestedTime_severeImpact * data.region.avgDailyIncomeInUSD * data.timeToElapse;

    document.getElementById('ci').value = currentlyInfected_impact;
    document.getElementById('ibrt').value = infectionByRequestedTime_impact;
    document.getElementById('scbrt').value = severeCaseByReportedTime_impact;
    document.getElementById('hbbrt').value = hospitalBedByRequestedTime_impact;
    document.getElementById('cfibrt').value = casesForICUByRequestedTime_impact;
    document.getElementById('cfbrt').value = casesForVentilatorsByRequestedTime_impact;
    document.getElementById('dif').value = dollarsInFlight_impact;

    document.getElementById('sci').value = currentlyInfected_severeImpact;
    document.getElementById('sibrt').value = infectionByRequestedTime_severeImpact;
    document.getElementById('sscbrt').value = severeCaseByReportedTime_severeImpact;
    document.getElementById('shbbrt').value = hospitalBedByRequestedTime_severeImpact;
    document.getElementById('scfibrt').value = casesForVentilatorsByRequestedTime_severeImpact;
    document.getElementById('scfbrt').value = casesForVentilatorsByRequestedTime_severeImpact;
    document.getElementById('sdif').value = dollarsInFlight_severeImpact;

    return {
        currentlyInfected_impact,
        infectionByRequestedTime_impact,
        severeCaseByReportedTime_impact,
        hospitalBedByRequestedTime_impact,
        casesForICUByRequestedTime_impact,
        casesForVentilatorsByRequestedTime_impact,
        dollarsInFlight_impact,

        currentlyInfected_severeImpact,
        infectionByRequestedTime_severeImpact,
        severeCaseByReportedTime_severeImpact,
        hospitalBedByRequestedTime_severeImpact,
        casesForICUByRequestedTime_severeImpact,
        casesForVentilatorsByRequestedTime_severeImpact,
        dollarsInFlight_severeImpact
    }
};

const covid19ImpactEstimator = (data) => {
    (function (data) {
        if (data.periodType === "days") {
            n = Math.pow(2, (Math.floor(data.timeToElapse / 3)));
            return calc(data);

        } else if (data.periodType = "weeks") {
            data.timeToElapse = data.timeToElapse * 7;
            n = Math.pow(2, (Math.floor(data.timeToElapse / 3)));

            return calc(data);

        } else if (data.periodType = "months") {
            data.timeToElapse = data.timeToElapse * 30;
            n = Math.pow(2, (Math.floor(data.timeToElapse / 3)));

            return calc(data);

        } else {
            alert("Not permitted period type. use months,weeks or days");
        }
    })(data);


    return {
        data: data,          // the input data you got   
        impact: {
            currentlyInfected: currentlyInfected_impact,
            infectionByRequestedTime: infectionByRequestedTime_impact,
            severeCaseByReportedTime: severeCaseByReportedTime_impact,
            hospitalBedByRequestedTime: hospitalBedByRequestedTime_impact,
            casesForICUByRequestedTime: casesForICUByRequestedTime_impact,
            casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTime_impact,
            dollarsInFlight: dollarsInFlight_impact

        },        // your best case estimation   
        severeImpact: {
            currentlyInfected: currentlyInfected_severeImpact,
            infectionByRequestedTime: infectionByRequestedTime_severeImpact,
            severeCaseByReportedTime: severeCaseByReportedTime_severeImpact,
            hospitalBedByRequestedTime: hospitalBedByRequestedTime_severeImpact,
            casesForICUByRequestedTime: casesForICUByRequestedTime_severeImpact,
            casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTime_severeImpact,
            dollarsInFlight: dollarsInFlight_severeImpact
        },  // your severe case estimation
    };

};


export default covid19ImpactEstimator;
