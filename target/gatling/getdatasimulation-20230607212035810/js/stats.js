var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4639",
        "ok": "4558",
        "ko": "81"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "182"
    },
    "maxResponseTime": {
        "total": "30795",
        "ok": "29607",
        "ko": "30795"
    },
    "meanResponseTime": {
        "total": "2792",
        "ok": "2640",
        "ko": "11344"
    },
    "standardDeviation": {
        "total": "4563",
        "ok": "4030",
        "ko": "14287"
    },
    "percentiles1": {
        "total": "865",
        "ok": "866",
        "ko": "777"
    },
    "percentiles2": {
        "total": "2715",
        "ok": "2702",
        "ko": "30420"
    },
    "percentiles3": {
        "total": "12274",
        "ok": "12086",
        "ko": "30578"
    },
    "percentiles4": {
        "total": "23315",
        "ok": "18806",
        "ko": "30785"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2094,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 715,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1749,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 81,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25.772",
        "ok": "25.322",
        "ko": "0.45"
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
        "total": "4639",
        "ok": "4558",
        "ko": "81"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "182"
    },
    "maxResponseTime": {
        "total": "30795",
        "ok": "29607",
        "ko": "30795"
    },
    "meanResponseTime": {
        "total": "2792",
        "ok": "2640",
        "ko": "11344"
    },
    "standardDeviation": {
        "total": "4563",
        "ok": "4030",
        "ko": "14287"
    },
    "percentiles1": {
        "total": "865",
        "ok": "866",
        "ko": "777"
    },
    "percentiles2": {
        "total": "2715",
        "ok": "2702",
        "ko": "30420"
    },
    "percentiles3": {
        "total": "12274",
        "ok": "12086",
        "ko": "30578"
    },
    "percentiles4": {
        "total": "23315",
        "ok": "18806",
        "ko": "30785"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2094,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 715,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1749,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 81,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25.772",
        "ok": "25.322",
        "ko": "0.45"
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
