var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4334",
        "ok": "4285",
        "ko": "49"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "118",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "15667",
        "ok": "15667",
        "ko": "534"
    },
    "meanResponseTime": {
        "total": "1062",
        "ok": "1071",
        "ko": "286"
    },
    "standardDeviation": {
        "total": "1715",
        "ok": "1723",
        "ko": "56"
    },
    "percentiles1": {
        "total": "351",
        "ok": "354",
        "ko": "284"
    },
    "percentiles2": {
        "total": "1043",
        "ok": "1054",
        "ko": "307"
    },
    "percentiles3": {
        "total": "4260",
        "ok": "4269",
        "ko": "354"
    },
    "percentiles4": {
        "total": "9788",
        "ok": "9859",
        "ko": "453"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2949,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 412,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 924,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 49,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.078",
        "ok": "23.806",
        "ko": "0.272"
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
        "total": "4334",
        "ok": "4285",
        "ko": "49"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "118",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "15667",
        "ok": "15667",
        "ko": "534"
    },
    "meanResponseTime": {
        "total": "1062",
        "ok": "1071",
        "ko": "286"
    },
    "standardDeviation": {
        "total": "1715",
        "ok": "1723",
        "ko": "56"
    },
    "percentiles1": {
        "total": "351",
        "ok": "354",
        "ko": "284"
    },
    "percentiles2": {
        "total": "1043",
        "ok": "1054",
        "ko": "307"
    },
    "percentiles3": {
        "total": "4260",
        "ok": "4269",
        "ko": "354"
    },
    "percentiles4": {
        "total": "9788",
        "ok": "9859",
        "ko": "453"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2949,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 412,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 924,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 49,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.078",
        "ok": "23.806",
        "ko": "0.272"
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
