var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29442",
        "ok": "29442",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles2": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "percentiles3": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "percentiles4": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29401,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 40,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "162.663",
        "ok": "162.663",
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
        "total": "29442",
        "ok": "29442",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles2": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "percentiles3": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "percentiles4": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29401,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 40,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "162.663",
        "ok": "162.663",
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
