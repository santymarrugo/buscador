var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "26282",
        "ok": "26282",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9934",
        "ok": "9934",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2199",
        "ok": "2199",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1333",
        "ok": "1333",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2001",
        "ok": "2001",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2606",
        "ok": "2606",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4368",
        "ok": "4368",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7944",
        "ok": "7944",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2884,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1768,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21630,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.607",
        "ok": "87.607",
        "ko": "-"
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
        "total": "26282",
        "ok": "26282",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9934",
        "ok": "9934",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2199",
        "ok": "2199",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1333",
        "ok": "1333",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2001",
        "ok": "2001",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2606",
        "ok": "2606",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4368",
        "ok": "4368",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7944",
        "ok": "7944",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2884,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1768,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21630,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.607",
        "ok": "87.607",
        "ko": "-"
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
