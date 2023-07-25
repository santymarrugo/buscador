var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "20",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "172",
        "ok": "197",
        "ko": "172"
    },
    "maxResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "202"
    },
    "meanResponseTime": {
        "total": "197",
        "ok": "220",
        "ko": "182"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "36",
        "ko": "9"
    },
    "percentiles1": {
        "total": "192",
        "ok": "211",
        "ko": "180"
    },
    "percentiles2": {
        "total": "206",
        "ok": "218",
        "ko": "184"
    },
    "percentiles3": {
        "total": "237",
        "ok": "249",
        "ko": "201"
    },
    "percentiles4": {
        "total": "305",
        "ok": "341",
        "ko": "202"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 40
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
    "count": 30,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "2",
        "ko": "3"
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
        "total": "50",
        "ok": "20",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "172",
        "ok": "197",
        "ko": "172"
    },
    "maxResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "202"
    },
    "meanResponseTime": {
        "total": "197",
        "ok": "220",
        "ko": "182"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "36",
        "ko": "9"
    },
    "percentiles1": {
        "total": "192",
        "ok": "211",
        "ko": "180"
    },
    "percentiles2": {
        "total": "206",
        "ok": "218",
        "ko": "184"
    },
    "percentiles3": {
        "total": "237",
        "ok": "249",
        "ko": "201"
    },
    "percentiles4": {
        "total": "305",
        "ok": "341",
        "ko": "202"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 40
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
    "count": 30,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "2",
        "ko": "3"
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
