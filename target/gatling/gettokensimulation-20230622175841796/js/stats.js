var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1443",
        "ok": "1443",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "681",
        "ok": "681",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "325",
        "ok": "325",
        "ko": "-"
    },
    "percentiles1": {
        "total": "606",
        "ok": "606",
        "ko": "-"
    },
    "percentiles2": {
        "total": "883",
        "ok": "883",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1296",
        "ok": "1296",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1364",
        "ok": "1364",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 67,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
        "ko": "-"
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1443",
        "ok": "1443",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "681",
        "ok": "681",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "325",
        "ok": "325",
        "ko": "-"
    },
    "percentiles1": {
        "total": "606",
        "ok": "606",
        "ko": "-"
    },
    "percentiles2": {
        "total": "883",
        "ok": "883",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1296",
        "ok": "1296",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1364",
        "ok": "1364",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 67,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
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
