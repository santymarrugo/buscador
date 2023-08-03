var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "250",
        "ok": "250",
        "ko": "375"
    },
    "maxResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "375"
    },
    "meanResponseTime": {
        "total": "317",
        "ok": "302",
        "ko": "375"
    },
    "standardDeviation": {
        "total": "64",
        "ok": "63",
        "ko": "0"
    },
    "percentiles1": {
        "total": "296",
        "ok": "276",
        "ko": "375"
    },
    "percentiles2": {
        "total": "375",
        "ok": "324",
        "ko": "375"
    },
    "percentiles3": {
        "total": "401",
        "ok": "390",
        "ko": "375"
    },
    "percentiles4": {
        "total": "406",
        "ok": "404",
        "ko": "375"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
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
    "count": 1,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.4",
        "ko": "0.1"
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
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "250",
        "ok": "250",
        "ko": "375"
    },
    "maxResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "375"
    },
    "meanResponseTime": {
        "total": "317",
        "ok": "302",
        "ko": "375"
    },
    "standardDeviation": {
        "total": "64",
        "ok": "63",
        "ko": "0"
    },
    "percentiles1": {
        "total": "296",
        "ok": "276",
        "ko": "375"
    },
    "percentiles2": {
        "total": "375",
        "ok": "324",
        "ko": "375"
    },
    "percentiles3": {
        "total": "401",
        "ok": "390",
        "ko": "375"
    },
    "percentiles4": {
        "total": "406",
        "ok": "404",
        "ko": "375"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
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
    "count": 1,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.4",
        "ko": "0.1"
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
