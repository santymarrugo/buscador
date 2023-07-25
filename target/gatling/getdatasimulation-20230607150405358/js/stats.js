var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "23519",
        "ok": "5354",
        "ko": "18165"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "102",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "32014",
        "ok": "5197",
        "ko": "32014"
    },
    "meanResponseTime": {
        "total": "527",
        "ok": "547",
        "ko": "521"
    },
    "standardDeviation": {
        "total": "3107",
        "ok": "427",
        "ko": "3528"
    },
    "percentiles1": {
        "total": "95",
        "ok": "471",
        "ko": "94"
    },
    "percentiles2": {
        "total": "197",
        "ok": "535",
        "ko": "97"
    },
    "percentiles3": {
        "total": "579",
        "ok": "944",
        "ko": "140"
    },
    "percentiles4": {
        "total": "30117",
        "ok": "3160",
        "ko": "30186"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4987,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 189,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 178,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 18165,
    "percentage": 77
},
    "meanNumberOfRequestsPerSecond": {
        "total": "130.661",
        "ok": "29.744",
        "ko": "100.917"
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
        "total": "23519",
        "ok": "5354",
        "ko": "18165"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "102",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "32014",
        "ok": "5197",
        "ko": "32014"
    },
    "meanResponseTime": {
        "total": "527",
        "ok": "547",
        "ko": "521"
    },
    "standardDeviation": {
        "total": "3107",
        "ok": "427",
        "ko": "3528"
    },
    "percentiles1": {
        "total": "95",
        "ok": "471",
        "ko": "94"
    },
    "percentiles2": {
        "total": "197",
        "ok": "535",
        "ko": "97"
    },
    "percentiles3": {
        "total": "579",
        "ok": "944",
        "ko": "140"
    },
    "percentiles4": {
        "total": "30117",
        "ok": "3160",
        "ko": "30186"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4987,
    "percentage": 21
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 189,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 178,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 18165,
    "percentage": 77
},
    "meanNumberOfRequestsPerSecond": {
        "total": "130.661",
        "ok": "29.744",
        "ko": "100.917"
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
