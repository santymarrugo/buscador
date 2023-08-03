var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32051",
        "ok": "8323",
        "ko": "23728"
    },
    "minResponseTime": {
        "total": "87",
        "ok": "102",
        "ko": "87"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "59859",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "2515",
        "ok": "2334",
        "ko": "2579"
    },
    "standardDeviation": {
        "total": "10926",
        "ok": "7642",
        "ko": "11864"
    },
    "percentiles1": {
        "total": "111",
        "ok": "129",
        "ko": "106"
    },
    "percentiles2": {
        "total": "130",
        "ok": "238",
        "ko": "117"
    },
    "percentiles3": {
        "total": "12202",
        "ok": "14511",
        "ko": "462"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "49601",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6927,
    "percentage": 22
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 208,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1188,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 23728,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "106.837",
        "ok": "27.743",
        "ko": "79.093"
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
        "total": "32051",
        "ok": "8323",
        "ko": "23728"
    },
    "minResponseTime": {
        "total": "87",
        "ok": "102",
        "ko": "87"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "59859",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "2515",
        "ok": "2334",
        "ko": "2579"
    },
    "standardDeviation": {
        "total": "10926",
        "ok": "7642",
        "ko": "11864"
    },
    "percentiles1": {
        "total": "111",
        "ok": "129",
        "ko": "106"
    },
    "percentiles2": {
        "total": "130",
        "ok": "238",
        "ko": "117"
    },
    "percentiles3": {
        "total": "12202",
        "ok": "14511",
        "ko": "462"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "49601",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6927,
    "percentage": 22
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 208,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1188,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 23728,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "106.837",
        "ok": "27.743",
        "ko": "79.093"
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
