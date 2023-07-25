var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "700",
        "ok": "693",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "97"
    },
    "maxResponseTime": {
        "total": "14309",
        "ok": "14309",
        "ko": "133"
    },
    "meanResponseTime": {
        "total": "285",
        "ok": "286",
        "ko": "113"
    },
    "standardDeviation": {
        "total": "1134",
        "ok": "1140",
        "ko": "13"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "106"
    },
    "percentiles2": {
        "total": "125",
        "ok": "125",
        "ko": "123"
    },
    "percentiles3": {
        "total": "625",
        "ok": "636",
        "ko": "133"
    },
    "percentiles4": {
        "total": "4109",
        "ok": "4354",
        "ko": "133"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 672,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 7,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.889",
        "ok": "3.85",
        "ko": "0.039"
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
        "total": "700",
        "ok": "693",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "97"
    },
    "maxResponseTime": {
        "total": "14309",
        "ok": "14309",
        "ko": "133"
    },
    "meanResponseTime": {
        "total": "285",
        "ok": "286",
        "ko": "113"
    },
    "standardDeviation": {
        "total": "1134",
        "ok": "1140",
        "ko": "13"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "106"
    },
    "percentiles2": {
        "total": "125",
        "ok": "125",
        "ko": "123"
    },
    "percentiles3": {
        "total": "625",
        "ok": "636",
        "ko": "133"
    },
    "percentiles4": {
        "total": "4109",
        "ok": "4354",
        "ko": "133"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 672,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 7,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.889",
        "ok": "3.85",
        "ko": "0.039"
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
