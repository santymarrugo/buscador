var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "3",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "206",
        "ko": "180"
    },
    "maxResponseTime": {
        "total": "255",
        "ok": "255",
        "ko": "187"
    },
    "meanResponseTime": {
        "total": "208",
        "ok": "224",
        "ko": "184"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "22",
        "ko": "4"
    },
    "percentiles1": {
        "total": "206",
        "ok": "211",
        "ko": "184"
    },
    "percentiles2": {
        "total": "211",
        "ok": "233",
        "ko": "185"
    },
    "percentiles3": {
        "total": "246",
        "ok": "251",
        "ko": "187"
    },
    "percentiles4": {
        "total": "253",
        "ok": "254",
        "ko": "187"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1",
        "ko": "0.667"
    }
},
contents: {
"req_gettoken-9f3c0": {
        type: "REQUEST",
        name: "GetToken",
path: "GetToken",
pathFormatted: "req_gettoken-9f3c0",
stats: {
    "name": "GetToken",
    "numberOfRequests": {
        "total": "5",
        "ok": "3",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "206",
        "ko": "180"
    },
    "maxResponseTime": {
        "total": "255",
        "ok": "255",
        "ko": "187"
    },
    "meanResponseTime": {
        "total": "208",
        "ok": "224",
        "ko": "184"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "22",
        "ko": "4"
    },
    "percentiles1": {
        "total": "206",
        "ok": "211",
        "ko": "184"
    },
    "percentiles2": {
        "total": "211",
        "ok": "233",
        "ko": "185"
    },
    "percentiles3": {
        "total": "246",
        "ok": "251",
        "ko": "187"
    },
    "percentiles4": {
        "total": "253",
        "ok": "254",
        "ko": "187"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1",
        "ko": "0.667"
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
