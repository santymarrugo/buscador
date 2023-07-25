var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7644",
        "ok": "7513",
        "ko": "131"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "103"
    },
    "maxResponseTime": {
        "total": "49040",
        "ok": "49040",
        "ko": "48656"
    },
    "meanResponseTime": {
        "total": "993",
        "ok": "719",
        "ko": "16675"
    },
    "standardDeviation": {
        "total": "5313",
        "ok": "3983",
        "ko": "22073"
    },
    "percentiles1": {
        "total": "150",
        "ok": "150",
        "ko": "242"
    },
    "percentiles2": {
        "total": "227",
        "ok": "224",
        "ko": "45608"
    },
    "percentiles3": {
        "total": "1481",
        "ok": "1369",
        "ko": "48329"
    },
    "percentiles4": {
        "total": "44449",
        "ok": "10194",
        "ko": "48543"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6940,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 141,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 432,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 131,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.5",
        "ok": "44.72",
        "ko": "0.78"
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
        "total": "7644",
        "ok": "7513",
        "ko": "131"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "103"
    },
    "maxResponseTime": {
        "total": "49040",
        "ok": "49040",
        "ko": "48656"
    },
    "meanResponseTime": {
        "total": "993",
        "ok": "719",
        "ko": "16675"
    },
    "standardDeviation": {
        "total": "5313",
        "ok": "3983",
        "ko": "22073"
    },
    "percentiles1": {
        "total": "150",
        "ok": "150",
        "ko": "242"
    },
    "percentiles2": {
        "total": "227",
        "ok": "224",
        "ko": "45608"
    },
    "percentiles3": {
        "total": "1481",
        "ok": "1369",
        "ko": "48329"
    },
    "percentiles4": {
        "total": "44449",
        "ok": "10194",
        "ko": "48543"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6940,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 141,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 432,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 131,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.5",
        "ok": "44.72",
        "ko": "0.78"
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
