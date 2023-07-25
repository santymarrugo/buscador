var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15746",
        "ok": "15313",
        "ko": "433"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "31243",
        "ok": "29869",
        "ko": "31243"
    },
    "meanResponseTime": {
        "total": "1212",
        "ok": "736",
        "ko": "18045"
    },
    "standardDeviation": {
        "total": "4508",
        "ok": "2542",
        "ko": "14805"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "30160"
    },
    "percentiles2": {
        "total": "424",
        "ok": "294",
        "ko": "30380"
    },
    "percentiles3": {
        "total": "5311",
        "ok": "2546",
        "ko": "30604"
    },
    "percentiles4": {
        "total": "30271",
        "ok": "17061",
        "ko": "30841"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13809,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 301,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1203,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 433,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.478",
        "ok": "85.072",
        "ko": "2.406"
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
        "total": "15746",
        "ok": "15313",
        "ko": "433"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "31243",
        "ok": "29869",
        "ko": "31243"
    },
    "meanResponseTime": {
        "total": "1212",
        "ok": "736",
        "ko": "18045"
    },
    "standardDeviation": {
        "total": "4508",
        "ok": "2542",
        "ko": "14805"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "30160"
    },
    "percentiles2": {
        "total": "424",
        "ok": "294",
        "ko": "30380"
    },
    "percentiles3": {
        "total": "5311",
        "ok": "2546",
        "ko": "30604"
    },
    "percentiles4": {
        "total": "30271",
        "ok": "17061",
        "ko": "30841"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13809,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 301,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1203,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 433,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.478",
        "ok": "85.072",
        "ko": "2.406"
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
