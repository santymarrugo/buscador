var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8685",
        "ok": "2362",
        "ko": "6323"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "109",
        "ko": "91"
    },
    "maxResponseTime": {
        "total": "51250",
        "ok": "43742",
        "ko": "51250"
    },
    "meanResponseTime": {
        "total": "2617",
        "ok": "5662",
        "ko": "1480"
    },
    "standardDeviation": {
        "total": "7035",
        "ok": "7177",
        "ko": "6631"
    },
    "percentiles1": {
        "total": "242",
        "ok": "2494",
        "ko": "212"
    },
    "percentiles2": {
        "total": "451",
        "ok": "6720",
        "ko": "274"
    },
    "percentiles3": {
        "total": "17810",
        "ok": "19622",
        "ko": "491"
    },
    "percentiles4": {
        "total": "35571",
        "ok": "31614",
        "ko": "36363"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 740,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 141,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1481,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 6323,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "48.25",
        "ok": "13.122",
        "ko": "35.128"
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
        "total": "8685",
        "ok": "2362",
        "ko": "6323"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "109",
        "ko": "91"
    },
    "maxResponseTime": {
        "total": "51250",
        "ok": "43742",
        "ko": "51250"
    },
    "meanResponseTime": {
        "total": "2617",
        "ok": "5662",
        "ko": "1480"
    },
    "standardDeviation": {
        "total": "7035",
        "ok": "7177",
        "ko": "6631"
    },
    "percentiles1": {
        "total": "242",
        "ok": "2494",
        "ko": "212"
    },
    "percentiles2": {
        "total": "451",
        "ok": "6720",
        "ko": "274"
    },
    "percentiles3": {
        "total": "17810",
        "ok": "19622",
        "ko": "491"
    },
    "percentiles4": {
        "total": "35571",
        "ok": "31614",
        "ko": "36363"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 740,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 141,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1481,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 6323,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "48.25",
        "ok": "13.122",
        "ko": "35.128"
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
