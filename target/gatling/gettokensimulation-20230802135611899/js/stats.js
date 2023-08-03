var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "3",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "229",
        "ok": "246",
        "ko": "229"
    },
    "maxResponseTime": {
        "total": "404",
        "ok": "404",
        "ko": "229"
    },
    "meanResponseTime": {
        "total": "298",
        "ok": "321",
        "ko": "229"
    },
    "standardDeviation": {
        "total": "69",
        "ok": "65",
        "ko": "0"
    },
    "percentiles1": {
        "total": "279",
        "ok": "312",
        "ko": "229"
    },
    "percentiles2": {
        "total": "335",
        "ok": "358",
        "ko": "229"
    },
    "percentiles3": {
        "total": "390",
        "ok": "395",
        "ko": "229"
    },
    "percentiles4": {
        "total": "401",
        "ok": "402",
        "ko": "229"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 75
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
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.125",
        "ok": "0.094",
        "ko": "0.031"
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
        "total": "4",
        "ok": "3",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "229",
        "ok": "246",
        "ko": "229"
    },
    "maxResponseTime": {
        "total": "404",
        "ok": "404",
        "ko": "229"
    },
    "meanResponseTime": {
        "total": "298",
        "ok": "321",
        "ko": "229"
    },
    "standardDeviation": {
        "total": "69",
        "ok": "65",
        "ko": "0"
    },
    "percentiles1": {
        "total": "279",
        "ok": "312",
        "ko": "229"
    },
    "percentiles2": {
        "total": "335",
        "ok": "358",
        "ko": "229"
    },
    "percentiles3": {
        "total": "390",
        "ok": "395",
        "ko": "229"
    },
    "percentiles4": {
        "total": "401",
        "ok": "402",
        "ko": "229"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 75
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
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.125",
        "ok": "0.094",
        "ko": "0.031"
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
