var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2053",
        "ok": "2053",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1131",
        "ok": "1131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1500",
        "ok": "1500",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1712",
        "ok": "1712",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1871",
        "ok": "1871",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 56,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 89,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
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
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2053",
        "ok": "2053",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1131",
        "ok": "1131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1500",
        "ok": "1500",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1712",
        "ok": "1712",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1871",
        "ok": "1871",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 56,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 89,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
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
