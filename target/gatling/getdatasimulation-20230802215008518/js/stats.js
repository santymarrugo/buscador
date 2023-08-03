var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12691",
        "ok": "403",
        "ko": "12288"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "112",
        "ko": "89"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "59031",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "1539",
        "ok": "4967",
        "ko": "1426"
    },
    "standardDeviation": {
        "total": "8130",
        "ok": "11247",
        "ko": "7983"
    },
    "percentiles1": {
        "total": "136",
        "ok": "381",
        "ko": "130"
    },
    "percentiles2": {
        "total": "333",
        "ok": "1896",
        "ko": "315"
    },
    "percentiles3": {
        "total": "875",
        "ok": "34340",
        "ko": "803"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "35137",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 245,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 144,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 12288,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "101.528",
        "ok": "3.224",
        "ko": "98.304"
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
        "total": "12691",
        "ok": "403",
        "ko": "12288"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "112",
        "ko": "89"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "59031",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "1539",
        "ok": "4967",
        "ko": "1426"
    },
    "standardDeviation": {
        "total": "8130",
        "ok": "11247",
        "ko": "7983"
    },
    "percentiles1": {
        "total": "136",
        "ok": "381",
        "ko": "130"
    },
    "percentiles2": {
        "total": "333",
        "ok": "1896",
        "ko": "315"
    },
    "percentiles3": {
        "total": "875",
        "ok": "34340",
        "ko": "803"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "35137",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 245,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 144,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 12288,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "101.528",
        "ok": "3.224",
        "ko": "98.304"
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
