var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4095",
        "ok": "4024",
        "ko": "71"
    },
    "minResponseTime": {
        "total": "183",
        "ok": "183",
        "ko": "739"
    },
    "maxResponseTime": {
        "total": "38984",
        "ok": "36675",
        "ko": "38984"
    },
    "meanResponseTime": {
        "total": "7306",
        "ok": "7179",
        "ko": "14490"
    },
    "standardDeviation": {
        "total": "6154",
        "ok": "5840",
        "ko": "14086"
    },
    "percentiles1": {
        "total": "4589",
        "ok": "4588",
        "ko": "4717"
    },
    "percentiles2": {
        "total": "10213",
        "ok": "10183",
        "ko": "32791"
    },
    "percentiles3": {
        "total": "19442",
        "ok": "19317",
        "ko": "34182"
    },
    "percentiles4": {
        "total": "30160",
        "ok": "25023",
        "ko": "38415"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 92,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 116,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3816,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 71,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.75",
        "ok": "22.356",
        "ko": "0.394"
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
        "total": "4095",
        "ok": "4024",
        "ko": "71"
    },
    "minResponseTime": {
        "total": "183",
        "ok": "183",
        "ko": "739"
    },
    "maxResponseTime": {
        "total": "38984",
        "ok": "36675",
        "ko": "38984"
    },
    "meanResponseTime": {
        "total": "7306",
        "ok": "7179",
        "ko": "14490"
    },
    "standardDeviation": {
        "total": "6154",
        "ok": "5840",
        "ko": "14086"
    },
    "percentiles1": {
        "total": "4589",
        "ok": "4588",
        "ko": "4717"
    },
    "percentiles2": {
        "total": "10213",
        "ok": "10183",
        "ko": "32791"
    },
    "percentiles3": {
        "total": "19442",
        "ok": "19317",
        "ko": "34182"
    },
    "percentiles4": {
        "total": "30160",
        "ok": "25023",
        "ko": "38415"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 92,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 116,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3816,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 71,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.75",
        "ok": "22.356",
        "ko": "0.394"
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
