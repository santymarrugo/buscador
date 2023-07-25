var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7863",
        "ok": "7775",
        "ko": "88"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "93",
        "ko": "96"
    },
    "maxResponseTime": {
        "total": "1583",
        "ok": "1583",
        "ko": "734"
    },
    "meanResponseTime": {
        "total": "122",
        "ok": "122",
        "ko": "112"
    },
    "standardDeviation": {
        "total": "72",
        "ok": "73",
        "ko": "68"
    },
    "percentiles1": {
        "total": "102",
        "ok": "102",
        "ko": "100"
    },
    "percentiles2": {
        "total": "114",
        "ok": "115",
        "ko": "105"
    },
    "percentiles3": {
        "total": "211",
        "ok": "212",
        "ko": "139"
    },
    "percentiles4": {
        "total": "444",
        "ok": "444",
        "ko": "254"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7758,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 88,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.683",
        "ok": "43.194",
        "ko": "0.489"
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
        "total": "7863",
        "ok": "7775",
        "ko": "88"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "93",
        "ko": "96"
    },
    "maxResponseTime": {
        "total": "1583",
        "ok": "1583",
        "ko": "734"
    },
    "meanResponseTime": {
        "total": "122",
        "ok": "122",
        "ko": "112"
    },
    "standardDeviation": {
        "total": "72",
        "ok": "73",
        "ko": "68"
    },
    "percentiles1": {
        "total": "102",
        "ok": "102",
        "ko": "100"
    },
    "percentiles2": {
        "total": "114",
        "ok": "114",
        "ko": "105"
    },
    "percentiles3": {
        "total": "211",
        "ok": "212",
        "ko": "139"
    },
    "percentiles4": {
        "total": "444",
        "ok": "444",
        "ko": "254"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7758,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 88,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.683",
        "ok": "43.194",
        "ko": "0.489"
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
