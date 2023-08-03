var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1539",
        "ok": "1389",
        "ko": "150"
    },
    "minResponseTime": {
        "total": "109",
        "ok": "109",
        "ko": "30112"
    },
    "maxResponseTime": {
        "total": "30374",
        "ok": "29308",
        "ko": "30374"
    },
    "meanResponseTime": {
        "total": "4005",
        "ok": "1183",
        "ko": "30143"
    },
    "standardDeviation": {
        "total": "9442",
        "ok": "4127",
        "ko": "46"
    },
    "percentiles1": {
        "total": "141",
        "ok": "134",
        "ko": "30128"
    },
    "percentiles2": {
        "total": "257",
        "ok": "196",
        "ko": "30144"
    },
    "percentiles3": {
        "total": "30128",
        "ok": "10192",
        "ko": "30251"
    },
    "percentiles4": {
        "total": "30169",
        "ok": "23304",
        "ko": "30333"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1271,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 105,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 150,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.55",
        "ok": "7.717",
        "ko": "0.833"
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
        "total": "1539",
        "ok": "1389",
        "ko": "150"
    },
    "minResponseTime": {
        "total": "109",
        "ok": "109",
        "ko": "30112"
    },
    "maxResponseTime": {
        "total": "30374",
        "ok": "29308",
        "ko": "30374"
    },
    "meanResponseTime": {
        "total": "4005",
        "ok": "1183",
        "ko": "30143"
    },
    "standardDeviation": {
        "total": "9442",
        "ok": "4127",
        "ko": "46"
    },
    "percentiles1": {
        "total": "141",
        "ok": "134",
        "ko": "30128"
    },
    "percentiles2": {
        "total": "257",
        "ok": "196",
        "ko": "30144"
    },
    "percentiles3": {
        "total": "30128",
        "ok": "10192",
        "ko": "30251"
    },
    "percentiles4": {
        "total": "30169",
        "ok": "23304",
        "ko": "30333"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1271,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 13,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 105,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 150,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.55",
        "ok": "7.717",
        "ko": "0.833"
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
