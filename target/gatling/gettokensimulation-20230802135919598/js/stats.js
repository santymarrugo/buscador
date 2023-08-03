var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "2",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "280",
        "ko": "266"
    },
    "maxResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "362"
    },
    "meanResponseTime": {
        "total": "311",
        "ok": "323",
        "ko": "303"
    },
    "standardDeviation": {
        "total": "44",
        "ok": "43",
        "ko": "42"
    },
    "percentiles1": {
        "total": "280",
        "ok": "323",
        "ko": "280"
    },
    "percentiles2": {
        "total": "362",
        "ok": "344",
        "ko": "321"
    },
    "percentiles3": {
        "total": "364",
        "ok": "361",
        "ko": "354"
    },
    "percentiles4": {
        "total": "365",
        "ok": "364",
        "ko": "360"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 40
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
    "count": 3,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "1",
        "ko": "1.5"
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
        "ok": "2",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "280",
        "ko": "266"
    },
    "maxResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "362"
    },
    "meanResponseTime": {
        "total": "311",
        "ok": "323",
        "ko": "303"
    },
    "standardDeviation": {
        "total": "44",
        "ok": "43",
        "ko": "42"
    },
    "percentiles1": {
        "total": "280",
        "ok": "323",
        "ko": "280"
    },
    "percentiles2": {
        "total": "362",
        "ok": "344",
        "ko": "321"
    },
    "percentiles3": {
        "total": "364",
        "ok": "361",
        "ko": "354"
    },
    "percentiles4": {
        "total": "365",
        "ok": "364",
        "ko": "360"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 40
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
    "count": 3,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "1",
        "ko": "1.5"
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
