var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "21224",
        "ok": "14812",
        "ko": "6412"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "104",
        "ko": "91"
    },
    "maxResponseTime": {
        "total": "60019",
        "ok": "59946",
        "ko": "60019"
    },
    "meanResponseTime": {
        "total": "2392",
        "ok": "374",
        "ko": "7054"
    },
    "standardDeviation": {
        "total": "11314",
        "ok": "3356",
        "ko": "19145"
    },
    "percentiles1": {
        "total": "123",
        "ok": "125",
        "ko": "111"
    },
    "percentiles2": {
        "total": "141",
        "ok": "141",
        "ko": "149"
    },
    "percentiles3": {
        "total": "311",
        "ok": "240",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "60011",
        "ok": "412",
        "ko": "60014"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14733,
    "percentage": 69
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 75,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 6412,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "70.747",
        "ok": "49.373",
        "ko": "21.373"
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
        "total": "21224",
        "ok": "14812",
        "ko": "6412"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "104",
        "ko": "91"
    },
    "maxResponseTime": {
        "total": "60019",
        "ok": "59946",
        "ko": "60019"
    },
    "meanResponseTime": {
        "total": "2392",
        "ok": "374",
        "ko": "7054"
    },
    "standardDeviation": {
        "total": "11314",
        "ok": "3356",
        "ko": "19145"
    },
    "percentiles1": {
        "total": "123",
        "ok": "125",
        "ko": "111"
    },
    "percentiles2": {
        "total": "141",
        "ok": "141",
        "ko": "149"
    },
    "percentiles3": {
        "total": "311",
        "ok": "240",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "60011",
        "ok": "412",
        "ko": "60014"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14733,
    "percentage": 69
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 75,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 6412,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "70.747",
        "ok": "49.373",
        "ko": "21.373"
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
