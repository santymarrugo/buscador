var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "3",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "323",
        "ok": "343",
        "ko": "323"
    },
    "maxResponseTime": {
        "total": "531",
        "ok": "531",
        "ko": "383"
    },
    "meanResponseTime": {
        "total": "395",
        "ok": "423",
        "ko": "353"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "79",
        "ko": "30"
    },
    "percentiles1": {
        "total": "383",
        "ok": "396",
        "ko": "353"
    },
    "percentiles2": {
        "total": "396",
        "ok": "464",
        "ko": "368"
    },
    "percentiles3": {
        "total": "504",
        "ok": "518",
        "ko": "380"
    },
    "percentiles4": {
        "total": "526",
        "ok": "528",
        "ko": "382"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "1.5",
        "ko": "1"
    }
},
contents: {
"req_gettoken-9f3c0": {
        type: "REQUEST",
        name: "GetToken",
path: "GetToken",
pathFormatted: "req_gettoken-9f3c0",
stats: {
    "name": "GetToken",
    "numberOfRequests": {
        "total": "5",
        "ok": "3",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "323",
        "ok": "343",
        "ko": "323"
    },
    "maxResponseTime": {
        "total": "531",
        "ok": "531",
        "ko": "383"
    },
    "meanResponseTime": {
        "total": "395",
        "ok": "423",
        "ko": "353"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "79",
        "ko": "30"
    },
    "percentiles1": {
        "total": "383",
        "ok": "396",
        "ko": "353"
    },
    "percentiles2": {
        "total": "396",
        "ok": "464",
        "ko": "368"
    },
    "percentiles3": {
        "total": "504",
        "ok": "518",
        "ko": "380"
    },
    "percentiles4": {
        "total": "526",
        "ok": "528",
        "ko": "382"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "1.5",
        "ko": "1"
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
