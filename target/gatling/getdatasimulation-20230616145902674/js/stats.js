var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15544",
        "ok": "15120",
        "ko": "424"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "31678",
        "ok": "29693",
        "ko": "31678"
    },
    "meanResponseTime": {
        "total": "1241",
        "ok": "772",
        "ko": "17965"
    },
    "standardDeviation": {
        "total": "4502",
        "ok": "2568",
        "ko": "14837"
    },
    "percentiles1": {
        "total": "122",
        "ok": "121",
        "ko": "30181"
    },
    "percentiles2": {
        "total": "488",
        "ok": "459",
        "ko": "30382"
    },
    "percentiles3": {
        "total": "5374",
        "ok": "2551",
        "ko": "30701"
    },
    "percentiles4": {
        "total": "30293",
        "ok": "17558",
        "ko": "31211"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13323,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 494,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1303,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 424,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.356",
        "ok": "84",
        "ko": "2.356"
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
        "total": "15544",
        "ok": "15120",
        "ko": "424"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "31678",
        "ok": "29693",
        "ko": "31678"
    },
    "meanResponseTime": {
        "total": "1241",
        "ok": "772",
        "ko": "17965"
    },
    "standardDeviation": {
        "total": "4502",
        "ok": "2568",
        "ko": "14837"
    },
    "percentiles1": {
        "total": "122",
        "ok": "121",
        "ko": "30181"
    },
    "percentiles2": {
        "total": "488",
        "ok": "459",
        "ko": "30382"
    },
    "percentiles3": {
        "total": "5374",
        "ok": "2551",
        "ko": "30701"
    },
    "percentiles4": {
        "total": "30293",
        "ok": "17558",
        "ko": "31211"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13323,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 494,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1303,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 424,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.356",
        "ok": "84",
        "ko": "2.356"
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
