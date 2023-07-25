var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7709",
        "ok": "7623",
        "ko": "86"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "98"
    },
    "maxResponseTime": {
        "total": "1955",
        "ok": "1955",
        "ko": "853"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "140"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "124",
        "ko": "129"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "105"
    },
    "percentiles2": {
        "total": "124",
        "ok": "124",
        "ko": "113"
    },
    "percentiles3": {
        "total": "335",
        "ok": "335",
        "ko": "213"
    },
    "percentiles4": {
        "total": "783",
        "ok": "779",
        "ko": "809"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7553,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 57,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 86,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.828",
        "ok": "42.35",
        "ko": "0.478"
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
        "total": "7709",
        "ok": "7623",
        "ko": "86"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "98"
    },
    "maxResponseTime": {
        "total": "1955",
        "ok": "1955",
        "ko": "853"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "140"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "124",
        "ko": "129"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "105"
    },
    "percentiles2": {
        "total": "124",
        "ok": "124",
        "ko": "113"
    },
    "percentiles3": {
        "total": "335",
        "ok": "335",
        "ko": "213"
    },
    "percentiles4": {
        "total": "783",
        "ok": "779",
        "ko": "809"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7553,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 57,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 86,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.828",
        "ok": "42.35",
        "ko": "0.478"
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
