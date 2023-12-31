var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "27151",
        "ok": "27147",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "90",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "4351",
        "ok": "4351",
        "ko": "106"
    },
    "meanResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "94"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "8"
    },
    "percentiles1": {
        "total": "97",
        "ok": "97",
        "ko": "93"
    },
    "percentiles2": {
        "total": "101",
        "ok": "101",
        "ko": "97"
    },
    "percentiles3": {
        "total": "113",
        "ok": "113",
        "ko": "104"
    },
    "percentiles4": {
        "total": "173",
        "ok": "173",
        "ko": "106"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 27109,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.503",
        "ok": "90.49",
        "ko": "0.013"
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
        "total": "27151",
        "ok": "27147",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "90",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "4351",
        "ok": "4351",
        "ko": "106"
    },
    "meanResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "94"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "100",
        "ko": "8"
    },
    "percentiles1": {
        "total": "97",
        "ok": "97",
        "ko": "93"
    },
    "percentiles2": {
        "total": "101",
        "ok": "101",
        "ko": "97"
    },
    "percentiles3": {
        "total": "113",
        "ok": "113",
        "ko": "104"
    },
    "percentiles4": {
        "total": "173",
        "ok": "173",
        "ko": "106"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 27109,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.503",
        "ok": "90.49",
        "ko": "0.013"
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
