var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4638",
        "ok": "4547",
        "ko": "91"
    },
    "minResponseTime": {
        "total": "211",
        "ok": "211",
        "ko": "315"
    },
    "maxResponseTime": {
        "total": "31291",
        "ok": "29984",
        "ko": "31291"
    },
    "meanResponseTime": {
        "total": "2794",
        "ok": "2579",
        "ko": "13526"
    },
    "standardDeviation": {
        "total": "4206",
        "ok": "3368",
        "ko": "14746"
    },
    "percentiles1": {
        "total": "964",
        "ok": "965",
        "ko": "899"
    },
    "percentiles2": {
        "total": "2912",
        "ok": "2880",
        "ko": "30494"
    },
    "percentiles3": {
        "total": "12039",
        "ok": "11528",
        "ko": "30678"
    },
    "percentiles4": {
        "total": "14343",
        "ok": "13570",
        "ko": "30937"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1845,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 680,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2022,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 91,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25.767",
        "ok": "25.261",
        "ko": "0.506"
    }
},
contents: {
"req_get-data-a80c1": {
        type: "REQUEST",
        name: "Get Data",
path: "Get Data",
pathFormatted: "req_get-data-a80c1",
stats: {
    "name": "Get Data",
    "numberOfRequests": {
        "total": "4638",
        "ok": "4547",
        "ko": "91"
    },
    "minResponseTime": {
        "total": "211",
        "ok": "211",
        "ko": "315"
    },
    "maxResponseTime": {
        "total": "31291",
        "ok": "29984",
        "ko": "31291"
    },
    "meanResponseTime": {
        "total": "2794",
        "ok": "2579",
        "ko": "13526"
    },
    "standardDeviation": {
        "total": "4206",
        "ok": "3368",
        "ko": "14746"
    },
    "percentiles1": {
        "total": "964",
        "ok": "965",
        "ko": "899"
    },
    "percentiles2": {
        "total": "2912",
        "ok": "2880",
        "ko": "30494"
    },
    "percentiles3": {
        "total": "12039",
        "ok": "11528",
        "ko": "30678"
    },
    "percentiles4": {
        "total": "14343",
        "ok": "13570",
        "ko": "30937"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1845,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 680,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2022,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 91,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25.767",
        "ok": "25.261",
        "ko": "0.506"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
