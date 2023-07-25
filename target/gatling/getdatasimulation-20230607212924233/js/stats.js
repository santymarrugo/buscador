var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3711",
        "ok": "3642",
        "ko": "69"
    },
    "minResponseTime": {
        "total": "417",
        "ok": "417",
        "ko": "926"
    },
    "maxResponseTime": {
        "total": "56203",
        "ok": "47591",
        "ko": "56203"
    },
    "meanResponseTime": {
        "total": "8352",
        "ok": "8191",
        "ko": "16865"
    },
    "standardDeviation": {
        "total": "8120",
        "ok": "7847",
        "ko": "14911"
    },
    "percentiles1": {
        "total": "4147",
        "ok": "4138",
        "ko": "6804"
    },
    "percentiles2": {
        "total": "11331",
        "ok": "11104",
        "ko": "32997"
    },
    "percentiles3": {
        "total": "24770",
        "ok": "24702",
        "ko": "34686"
    },
    "percentiles4": {
        "total": "36705",
        "ok": "36694",
        "ko": "43216"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 76,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3516,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 69,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.732",
        "ok": "20.346",
        "ko": "0.385"
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
        "total": "3711",
        "ok": "3642",
        "ko": "69"
    },
    "minResponseTime": {
        "total": "417",
        "ok": "417",
        "ko": "926"
    },
    "maxResponseTime": {
        "total": "56203",
        "ok": "47591",
        "ko": "56203"
    },
    "meanResponseTime": {
        "total": "8352",
        "ok": "8191",
        "ko": "16865"
    },
    "standardDeviation": {
        "total": "8120",
        "ok": "7847",
        "ko": "14911"
    },
    "percentiles1": {
        "total": "4147",
        "ok": "4138",
        "ko": "6804"
    },
    "percentiles2": {
        "total": "11331",
        "ok": "11104",
        "ko": "32997"
    },
    "percentiles3": {
        "total": "24770",
        "ok": "24702",
        "ko": "34686"
    },
    "percentiles4": {
        "total": "36705",
        "ok": "36694",
        "ko": "43216"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 76,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3516,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 69,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.732",
        "ok": "20.346",
        "ko": "0.385"
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
