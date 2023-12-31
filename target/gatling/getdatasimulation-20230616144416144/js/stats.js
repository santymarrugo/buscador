var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14283",
        "ok": "14123",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "91"
    },
    "maxResponseTime": {
        "total": "6637",
        "ok": "6637",
        "ko": "833"
    },
    "meanResponseTime": {
        "total": "258",
        "ok": "259",
        "ko": "150"
    },
    "standardDeviation": {
        "total": "514",
        "ok": "517",
        "ko": "125"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "109"
    },
    "percentiles2": {
        "total": "159",
        "ok": "159",
        "ko": "140"
    },
    "percentiles3": {
        "total": "910",
        "ok": "918",
        "ko": "318"
    },
    "percentiles4": {
        "total": "2909",
        "ok": "2942",
        "ko": "771"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13263,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 355,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 505,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 160,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "79.35",
        "ok": "78.461",
        "ko": "0.889"
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
        "total": "14283",
        "ok": "14123",
        "ko": "160"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "91"
    },
    "maxResponseTime": {
        "total": "6637",
        "ok": "6637",
        "ko": "833"
    },
    "meanResponseTime": {
        "total": "258",
        "ok": "259",
        "ko": "150"
    },
    "standardDeviation": {
        "total": "514",
        "ok": "517",
        "ko": "125"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "109"
    },
    "percentiles2": {
        "total": "159",
        "ok": "159",
        "ko": "140"
    },
    "percentiles3": {
        "total": "910",
        "ok": "918",
        "ko": "318"
    },
    "percentiles4": {
        "total": "2909",
        "ok": "2942",
        "ko": "771"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13263,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 355,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 505,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 160,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "79.35",
        "ok": "78.461",
        "ko": "0.889"
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
