var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12548",
        "ok": "11929",
        "ko": "619"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "100",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "35278",
        "ok": "6566",
        "ko": "35278"
    },
    "meanResponseTime": {
        "total": "1748",
        "ok": "620",
        "ko": "23488"
    },
    "standardDeviation": {
        "total": "5710",
        "ok": "529",
        "ko": "12585"
    },
    "percentiles1": {
        "total": "504",
        "ok": "501",
        "ko": "30277"
    },
    "percentiles2": {
        "total": "574",
        "ok": "560",
        "ko": "30406"
    },
    "percentiles3": {
        "total": "3309",
        "ok": "1068",
        "ko": "30626"
    },
    "percentiles4": {
        "total": "30438",
        "ok": "3480",
        "ko": "31570"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10918,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 475,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 536,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 619,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "69.711",
        "ok": "66.272",
        "ko": "3.439"
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
        "total": "12548",
        "ok": "11929",
        "ko": "619"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "100",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "35278",
        "ok": "6566",
        "ko": "35278"
    },
    "meanResponseTime": {
        "total": "1748",
        "ok": "620",
        "ko": "23488"
    },
    "standardDeviation": {
        "total": "5710",
        "ok": "529",
        "ko": "12585"
    },
    "percentiles1": {
        "total": "504",
        "ok": "501",
        "ko": "30277"
    },
    "percentiles2": {
        "total": "574",
        "ok": "560",
        "ko": "30406"
    },
    "percentiles3": {
        "total": "3309",
        "ok": "1068",
        "ko": "30626"
    },
    "percentiles4": {
        "total": "30438",
        "ok": "3480",
        "ko": "31570"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10918,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 475,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 536,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 619,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "69.711",
        "ok": "66.272",
        "ko": "3.439"
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
