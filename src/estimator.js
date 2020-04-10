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

const covid19ImpactEstimator = (data) => {
    (function (data) {
        if (data.periodType = "days") {
            // n = 2 * powerof(Math.floor(data.timeToElapse / 3));
            n = 4;
            return {

                currentlyInfected_impact = data.reportedCases * 10;
                infectionByRequestedTime_impact = currentlyInfected_impact * n;
                severeCaseByReortedTime_impact = 0.15 * infectionByRequestedTime_impact;
                hospitalBedByRequestedTime_impact = totalHospitalBeds - severeCaseByReortedTime_impact;

                currentlyInfected_severeImpact = data.reportedCases * 50;
                infectionByRequestedTime_severeImpact = currentlyInfected_severeImpact * n;
                severeCaseByReortedTime_severeImpact = 0.15 * severeCaseByReortedTime_severeImpact;
                hospitalBedByRequestedTime_severeImpact = totalHospitalBeds - severeCaseByReortedTime_severeImpact;

            };

        } else if (data.periodType = "weeks") {
            data.timeToElapse = data.timeToElapse * 7;
            n = 2 * powerof(Math.floor(data.timeToElapse / 3));
            return {
                currentlyInfected_impact = data.reportedCases * 10;
                infectionByRequestedTime_impact = currentlyInfected_impact * n;
                severeCaseByReortedTime_impact = 0.15 * infectionByRequestedTime_impact;
                hospitalBedByRequestedTime_impact = totalHospitalBeds - severeCaseByReortedTime_impact;

                currentlyInfected_severeImpact = data.reportedCases * 50;
                infectionByRequestedTime_severeImpact = currentlyInfected_severeImpact * n;
                severeCaseByReortedTime_severeImpact = 0.15 * severeCaseByReortedTime_severeImpact;
                hospitalBedByRequestedTime_severeImpact = totalHospitalBeds - severeCaseByReortedTime_severeImpact;

            };

        } else if (data.periodType = "months") {
            data.timeToElapse = data.timeToElapse * 30;
            n = 2 * powerof(Math.floor(data.timeToElapse / 3));
            return {
                currentlyInfected_impact = data.reportedCases * 10;
                infectionByRequestedTime_impact = currentlyInfected_impact * n;
                severeCaseByReortedTime_impact = 0.15 * infectionByRequestedTime_impact;
                hospitalBedByRequestedTime_impact = totalHospitalBeds - severeCaseByReortedTime_impact;

                currentlyInfected_severeImpact = data.reportedCases * 50;
                infectionByRequestedTime_severeImpact = currentlyInfected_severeImpact * n;
                severeCaseByReortedTime_severeImpact = 0.15 * severeCaseByReortedTime_severeImpact;
                hospitalBedByRequestedTime_severeImpact = totalHospitalBeds - severeCaseByReortedTime_severeImpact;
            };

        } else {
            alert("Not permitted period type. use months,weeks or days");
        }
    })();

    return {
        data: data,          // the input data you got   
        impact: {
            currentlyInfected: currentlyInfected_impact,
            infectionByRequestedTime: infectionByRequestedTime_impact,
            severeCaseByReortedTime: severeCaseByReortedTime_impact,
            hospitalBedByRequestedTime: hospitalBedByRequestedTime_impact

        },        // your best case estimation   
        severeImpact: {
            currentlyInfected: currentlyInfected_severeImpact,
            infectionByRequestedTime: infectionByRequestedTime_severeImpact,
            severeCaseByReortedTime: severeCaseByReortedTime_severeImpact,
            hospitalBedByRequestedTime: hospitalBedByRequestedTime_severeImpact
        }   // your severe case estimation
    }
};

export default covid19ImpactEstimator;
