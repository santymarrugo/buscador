var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "963",
        "ok": "963",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3189",
        "ok": "3189",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles3": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1042",
        "ok": "1042",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 947,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.05",
        "ok": "16.05",
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
        "total": "963",
        "ok": "963",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3189",
        "ok": "3189",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles3": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1042",
        "ok": "1042",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 947,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.05",
        "ok": "16.05",
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
