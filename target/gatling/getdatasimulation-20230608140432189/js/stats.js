var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6683",
        "ok": "6356",
        "ko": "327"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "108",
        "ko": "233"
    },
    "maxResponseTime": {
        "total": "32536",
        "ok": "6641",
        "ko": "32536"
    },
    "meanResponseTime": {
        "total": "1572",
        "ok": "448",
        "ko": "23417"
    },
    "standardDeviation": {
        "total": "5698",
        "ok": "458",
        "ko": "12564"
    },
    "percentiles1": {
        "total": "363",
        "ok": "361",
        "ko": "30203"
    },
    "percentiles2": {
        "total": "402",
        "ok": "397",
        "ko": "30294"
    },
    "percentiles3": {
        "total": "2531",
        "ok": "672",
        "ko": "30359"
    },
    "percentiles4": {
        "total": "30309",
        "ok": "2812",
        "ko": "31299"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6086,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 218,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 327,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.128",
        "ok": "35.311",
        "ko": "1.817"
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
        "total": "6683",
        "ok": "6356",
        "ko": "327"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "108",
        "ko": "233"
    },
    "maxResponseTime": {
        "total": "32536",
        "ok": "6641",
        "ko": "32536"
    },
    "meanResponseTime": {
        "total": "1572",
        "ok": "448",
        "ko": "23417"
    },
    "standardDeviation": {
        "total": "5698",
        "ok": "458",
        "ko": "12564"
    },
    "percentiles1": {
        "total": "363",
        "ok": "361",
        "ko": "30203"
    },
    "percentiles2": {
        "total": "402",
        "ok": "397",
        "ko": "30294"
    },
    "percentiles3": {
        "total": "2531",
        "ok": "672",
        "ko": "30359"
    },
    "percentiles4": {
        "total": "30309",
        "ok": "2812",
        "ko": "31299"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6086,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 218,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 327,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.128",
        "ok": "35.311",
        "ko": "1.817"
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
