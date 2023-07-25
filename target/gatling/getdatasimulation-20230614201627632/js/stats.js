var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7649",
        "ok": "7563",
        "ko": "86"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "8968",
        "ok": "8968",
        "ko": "650"
    },
    "meanResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "122"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "261",
        "ko": "84"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "102"
    },
    "percentiles2": {
        "total": "120",
        "ok": "120",
        "ko": "109"
    },
    "percentiles3": {
        "total": "372",
        "ok": "373",
        "ko": "185"
    },
    "percentiles4": {
        "total": "1001",
        "ok": "1001",
        "ko": "643"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7428,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 88,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 47,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 86,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.494",
        "ok": "42.017",
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
        "total": "7649",
        "ok": "7563",
        "ko": "86"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "8968",
        "ok": "8968",
        "ko": "650"
    },
    "meanResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "122"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "261",
        "ko": "84"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "102"
    },
    "percentiles2": {
        "total": "120",
        "ok": "120",
        "ko": "109"
    },
    "percentiles3": {
        "total": "372",
        "ok": "373",
        "ko": "185"
    },
    "percentiles4": {
        "total": "1001",
        "ok": "1001",
        "ko": "643"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7428,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 88,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 47,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 86,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.494",
        "ok": "42.017",
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
