var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14439",
        "ok": "14341",
        "ko": "98"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "108"
    },
    "maxResponseTime": {
        "total": "39135",
        "ok": "39135",
        "ko": "34113"
    },
    "meanResponseTime": {
        "total": "1353",
        "ok": "1310",
        "ko": "7577"
    },
    "standardDeviation": {
        "total": "3228",
        "ok": "2999",
        "ko": "13418"
    },
    "percentiles1": {
        "total": "527",
        "ok": "529",
        "ko": "159"
    },
    "percentiles2": {
        "total": "866",
        "ok": "867",
        "ko": "265"
    },
    "percentiles3": {
        "total": "5137",
        "ok": "5070",
        "ko": "33871"
    },
    "percentiles4": {
        "total": "17447",
        "ok": "16777",
        "ko": "34025"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10514,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 798,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3029,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 98,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "80.217",
        "ok": "79.672",
        "ko": "0.544"
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
        "total": "14439",
        "ok": "14341",
        "ko": "98"
    },
    "minResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "108"
    },
    "maxResponseTime": {
        "total": "39135",
        "ok": "39135",
        "ko": "34113"
    },
    "meanResponseTime": {
        "total": "1353",
        "ok": "1310",
        "ko": "7577"
    },
    "standardDeviation": {
        "total": "3228",
        "ok": "2999",
        "ko": "13418"
    },
    "percentiles1": {
        "total": "527",
        "ok": "529",
        "ko": "159"
    },
    "percentiles2": {
        "total": "866",
        "ok": "867",
        "ko": "265"
    },
    "percentiles3": {
        "total": "5137",
        "ok": "5070",
        "ko": "33871"
    },
    "percentiles4": {
        "total": "17447",
        "ok": "16777",
        "ko": "34025"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10514,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 798,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3029,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 98,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "80.217",
        "ok": "79.672",
        "ko": "0.544"
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
