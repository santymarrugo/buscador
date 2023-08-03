var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "8",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "234",
        "ok": "234",
        "ko": "238"
    },
    "maxResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "248"
    },
    "meanResponseTime": {
        "total": "279",
        "ok": "289",
        "ko": "243"
    },
    "standardDeviation": {
        "total": "45",
        "ok": "46",
        "ko": "5"
    },
    "percentiles1": {
        "total": "258",
        "ok": "279",
        "ko": "243"
    },
    "percentiles2": {
        "total": "306",
        "ok": "314",
        "ko": "246"
    },
    "percentiles3": {
        "total": "356",
        "ok": "361",
        "ko": "248"
    },
    "percentiles4": {
        "total": "372",
        "ok": "373",
        "ko": "248"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 80
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
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.263",
        "ok": "0.211",
        "ko": "0.053"
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
        "total": "10",
        "ok": "8",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "234",
        "ok": "234",
        "ko": "238"
    },
    "maxResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "248"
    },
    "meanResponseTime": {
        "total": "279",
        "ok": "289",
        "ko": "243"
    },
    "standardDeviation": {
        "total": "45",
        "ok": "46",
        "ko": "5"
    },
    "percentiles1": {
        "total": "258",
        "ok": "279",
        "ko": "243"
    },
    "percentiles2": {
        "total": "306",
        "ok": "314",
        "ko": "246"
    },
    "percentiles3": {
        "total": "356",
        "ok": "361",
        "ko": "248"
    },
    "percentiles4": {
        "total": "372",
        "ok": "373",
        "ko": "248"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 80
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
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.263",
        "ok": "0.211",
        "ko": "0.053"
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
