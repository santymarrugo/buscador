var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "350",
        "ok": "350",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles1": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "percentiles2": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles3": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles4": {
        "total": "789",
        "ok": "789",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 347,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.75",
        "ok": "8.75",
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
        "total": "350",
        "ok": "350",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles1": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "percentiles2": {
        "total": "153",
        "ok": "153",
        "ko": "-"
    },
    "percentiles3": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles4": {
        "total": "789",
        "ok": "789",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 347,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.75",
        "ok": "8.75",
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
