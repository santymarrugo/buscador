var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1595",
        "ok": "1578",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "3603",
        "ok": "3603",
        "ko": "130"
    },
    "meanResponseTime": {
        "total": "127",
        "ok": "128",
        "ko": "102"
    },
    "standardDeviation": {
        "total": "149",
        "ok": "150",
        "ko": "9"
    },
    "percentiles1": {
        "total": "103",
        "ok": "103",
        "ko": "100"
    },
    "percentiles2": {
        "total": "114",
        "ok": "114",
        "ko": "103"
    },
    "percentiles3": {
        "total": "212",
        "ok": "213",
        "ko": "118"
    },
    "percentiles4": {
        "total": "491",
        "ok": "492",
        "ko": "128"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1569,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.861",
        "ok": "8.767",
        "ko": "0.094"
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
        "total": "1595",
        "ok": "1578",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "3603",
        "ok": "3603",
        "ko": "130"
    },
    "meanResponseTime": {
        "total": "127",
        "ok": "128",
        "ko": "102"
    },
    "standardDeviation": {
        "total": "149",
        "ok": "150",
        "ko": "9"
    },
    "percentiles1": {
        "total": "103",
        "ok": "103",
        "ko": "100"
    },
    "percentiles2": {
        "total": "114",
        "ok": "114",
        "ko": "103"
    },
    "percentiles3": {
        "total": "212",
        "ok": "213",
        "ko": "118"
    },
    "percentiles4": {
        "total": "491",
        "ok": "492",
        "ko": "128"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1569,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 17,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.861",
        "ok": "8.767",
        "ko": "0.094"
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
