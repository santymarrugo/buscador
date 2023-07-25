var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4015",
        "ok": "3940",
        "ko": "75"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "226",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "50944",
        "ok": "45932",
        "ko": "50944"
    },
    "meanResponseTime": {
        "total": "7728",
        "ok": "7575",
        "ko": "15767"
    },
    "standardDeviation": {
        "total": "7238",
        "ok": "6911",
        "ko": "15169"
    },
    "percentiles1": {
        "total": "4644",
        "ok": "4643",
        "ko": "4783"
    },
    "percentiles2": {
        "total": "9989",
        "ok": "9538",
        "ko": "33071"
    },
    "percentiles3": {
        "total": "25777",
        "ok": "23976",
        "ko": "36443"
    },
    "percentiles4": {
        "total": "30183",
        "ok": "26862",
        "ko": "46892"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 204,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3690,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 75,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.306",
        "ok": "21.889",
        "ko": "0.417"
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
        "total": "4015",
        "ok": "3940",
        "ko": "75"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "226",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "50944",
        "ok": "45932",
        "ko": "50944"
    },
    "meanResponseTime": {
        "total": "7728",
        "ok": "7575",
        "ko": "15767"
    },
    "standardDeviation": {
        "total": "7238",
        "ok": "6911",
        "ko": "15169"
    },
    "percentiles1": {
        "total": "4644",
        "ok": "4643",
        "ko": "4783"
    },
    "percentiles2": {
        "total": "9989",
        "ok": "9538",
        "ko": "33071"
    },
    "percentiles3": {
        "total": "25777",
        "ok": "23976",
        "ko": "36443"
    },
    "percentiles4": {
        "total": "30183",
        "ok": "26862",
        "ko": "46892"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 204,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3690,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 75,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.306",
        "ok": "21.889",
        "ko": "0.417"
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
