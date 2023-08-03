var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1555",
        "ok": "1398",
        "ko": "157"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "30110"
    },
    "maxResponseTime": {
        "total": "30545",
        "ok": "30117",
        "ko": "30545"
    },
    "meanResponseTime": {
        "total": "4000",
        "ok": "1065",
        "ko": "30138"
    },
    "standardDeviation": {
        "total": "9497",
        "ok": "3869",
        "ko": "55"
    },
    "percentiles1": {
        "total": "139",
        "ok": "134",
        "ko": "30126"
    },
    "percentiles2": {
        "total": "252",
        "ok": "188",
        "ko": "30135"
    },
    "percentiles3": {
        "total": "30126",
        "ok": "7259",
        "ko": "30157"
    },
    "percentiles4": {
        "total": "30145",
        "ok": "23702",
        "ko": "30445"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1291,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 99,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 157,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.639",
        "ok": "7.767",
        "ko": "0.872"
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
        "total": "1555",
        "ok": "1398",
        "ko": "157"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "30110"
    },
    "maxResponseTime": {
        "total": "30545",
        "ok": "30117",
        "ko": "30545"
    },
    "meanResponseTime": {
        "total": "4000",
        "ok": "1065",
        "ko": "30138"
    },
    "standardDeviation": {
        "total": "9497",
        "ok": "3869",
        "ko": "55"
    },
    "percentiles1": {
        "total": "139",
        "ok": "134",
        "ko": "30126"
    },
    "percentiles2": {
        "total": "252",
        "ok": "188",
        "ko": "30135"
    },
    "percentiles3": {
        "total": "30126",
        "ok": "7259",
        "ko": "30157"
    },
    "percentiles4": {
        "total": "30145",
        "ok": "23702",
        "ko": "30445"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1291,
    "percentage": 83
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 99,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 157,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.639",
        "ok": "7.767",
        "ko": "0.872"
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
