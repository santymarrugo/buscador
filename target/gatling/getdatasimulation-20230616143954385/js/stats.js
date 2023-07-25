var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7825",
        "ok": "7738",
        "ko": "87"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "1919",
        "ok": "1919",
        "ko": "710"
    },
    "meanResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "136"
    },
    "standardDeviation": {
        "total": "144",
        "ok": "145",
        "ko": "121"
    },
    "percentiles1": {
        "total": "101",
        "ok": "101",
        "ko": "99"
    },
    "percentiles2": {
        "total": "120",
        "ok": "120",
        "ko": "109"
    },
    "percentiles3": {
        "total": "447",
        "ok": "446",
        "ko": "439"
    },
    "percentiles4": {
        "total": "868",
        "ok": "870",
        "ko": "669"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7626,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 110,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 87,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.472",
        "ok": "42.989",
        "ko": "0.483"
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
        "total": "7825",
        "ok": "7738",
        "ko": "87"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "1919",
        "ok": "1919",
        "ko": "710"
    },
    "meanResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "136"
    },
    "standardDeviation": {
        "total": "144",
        "ok": "145",
        "ko": "121"
    },
    "percentiles1": {
        "total": "101",
        "ok": "101",
        "ko": "99"
    },
    "percentiles2": {
        "total": "120",
        "ok": "120",
        "ko": "109"
    },
    "percentiles3": {
        "total": "447",
        "ok": "446",
        "ko": "439"
    },
    "percentiles4": {
        "total": "868",
        "ok": "870",
        "ko": "669"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7626,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 110,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 87,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.472",
        "ok": "42.989",
        "ko": "0.483"
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
