var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "16190",
        "ok": "9859",
        "ko": "6331"
    },
    "minResponseTime": {
        "total": "84",
        "ok": "97",
        "ko": "84"
    },
    "maxResponseTime": {
        "total": "41485",
        "ok": "14518",
        "ko": "41485"
    },
    "meanResponseTime": {
        "total": "1131",
        "ok": "610",
        "ko": "1943"
    },
    "standardDeviation": {
        "total": "4568",
        "ok": "574",
        "ko": "7195"
    },
    "percentiles1": {
        "total": "443",
        "ok": "496",
        "ko": "92"
    },
    "percentiles2": {
        "total": "520",
        "ok": "564",
        "ko": "200"
    },
    "percentiles3": {
        "total": "1333",
        "ok": "1214",
        "ko": "30161"
    },
    "percentiles4": {
        "total": "30379",
        "ok": "3552",
        "ko": "30589"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8970,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 387,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 502,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 6331,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.944",
        "ok": "54.772",
        "ko": "35.172"
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
        "total": "16190",
        "ok": "9859",
        "ko": "6331"
    },
    "minResponseTime": {
        "total": "84",
        "ok": "97",
        "ko": "84"
    },
    "maxResponseTime": {
        "total": "41485",
        "ok": "14518",
        "ko": "41485"
    },
    "meanResponseTime": {
        "total": "1131",
        "ok": "610",
        "ko": "1943"
    },
    "standardDeviation": {
        "total": "4568",
        "ok": "574",
        "ko": "7195"
    },
    "percentiles1": {
        "total": "443",
        "ok": "496",
        "ko": "92"
    },
    "percentiles2": {
        "total": "520",
        "ok": "564",
        "ko": "200"
    },
    "percentiles3": {
        "total": "1333",
        "ok": "1214",
        "ko": "30161"
    },
    "percentiles4": {
        "total": "30379",
        "ok": "3552",
        "ko": "30590"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8970,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 387,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 502,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 6331,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.944",
        "ok": "54.772",
        "ko": "35.172"
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
