var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7710",
        "ok": "7624",
        "ko": "86"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "93",
        "ko": "96"
    },
    "maxResponseTime": {
        "total": "23764",
        "ok": "23764",
        "ko": "441"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "117"
    },
    "standardDeviation": {
        "total": "535",
        "ok": "538",
        "ko": "43"
    },
    "percentiles1": {
        "total": "106",
        "ok": "106",
        "ko": "104"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "110"
    },
    "percentiles3": {
        "total": "332",
        "ok": "340",
        "ko": "166"
    },
    "percentiles4": {
        "total": "1149",
        "ok": "1152",
        "ko": "268"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7489,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 67,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 86,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.833",
        "ok": "42.356",
        "ko": "0.478"
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
        "total": "7710",
        "ok": "7624",
        "ko": "86"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "93",
        "ko": "96"
    },
    "maxResponseTime": {
        "total": "23764",
        "ok": "23764",
        "ko": "441"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "117"
    },
    "standardDeviation": {
        "total": "535",
        "ok": "538",
        "ko": "43"
    },
    "percentiles1": {
        "total": "106",
        "ok": "106",
        "ko": "104"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "110"
    },
    "percentiles3": {
        "total": "332",
        "ok": "340",
        "ko": "166"
    },
    "percentiles4": {
        "total": "1149",
        "ok": "1152",
        "ko": "268"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7489,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 67,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 86,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.833",
        "ok": "42.356",
        "ko": "0.478"
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
