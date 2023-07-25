var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8325",
        "ok": "8142",
        "ko": "183"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "101"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "15178",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "1094",
        "ok": "431",
        "ko": "30589"
    },
    "standardDeviation": {
        "total": "6426",
        "ok": "1457",
        "ko": "29906"
    },
    "percentiles1": {
        "total": "136",
        "ok": "135",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "228",
        "ok": "221",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "1373",
        "ok": "944",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "10015",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7713,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 77,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 352,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 183,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.25",
        "ok": "45.233",
        "ko": "1.017"
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
        "total": "8325",
        "ok": "8142",
        "ko": "183"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "101"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "15178",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "1094",
        "ok": "431",
        "ko": "30589"
    },
    "standardDeviation": {
        "total": "6426",
        "ok": "1457",
        "ko": "29906"
    },
    "percentiles1": {
        "total": "136",
        "ok": "135",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "228",
        "ok": "221",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "1373",
        "ok": "944",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "10015",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7713,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 77,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 352,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 183,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.25",
        "ok": "45.233",
        "ko": "1.017"
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
