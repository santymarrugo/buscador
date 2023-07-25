var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1985",
        "ok": "0",
        "ko": "1985"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "-",
        "ko": "98"
    },
    "maxResponseTime": {
        "total": "2979",
        "ok": "-",
        "ko": "2979"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "-",
        "ko": "166"
    },
    "standardDeviation": {
        "total": "148",
        "ok": "-",
        "ko": "148"
    },
    "percentiles1": {
        "total": "149",
        "ok": "-",
        "ko": "149"
    },
    "percentiles2": {
        "total": "165",
        "ok": "-",
        "ko": "165"
    },
    "percentiles3": {
        "total": "195",
        "ok": "-",
        "ko": "195"
    },
    "percentiles4": {
        "total": "509",
        "ok": "-",
        "ko": "509"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1985,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.542",
        "ok": "-",
        "ko": "16.542"
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
        "total": "1985",
        "ok": "0",
        "ko": "1985"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "-",
        "ko": "98"
    },
    "maxResponseTime": {
        "total": "2979",
        "ok": "-",
        "ko": "2979"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "-",
        "ko": "166"
    },
    "standardDeviation": {
        "total": "148",
        "ok": "-",
        "ko": "148"
    },
    "percentiles1": {
        "total": "149",
        "ok": "-",
        "ko": "149"
    },
    "percentiles2": {
        "total": "165",
        "ok": "-",
        "ko": "165"
    },
    "percentiles3": {
        "total": "195",
        "ok": "-",
        "ko": "195"
    },
    "percentiles4": {
        "total": "509",
        "ok": "-",
        "ko": "509"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1985,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.542",
        "ok": "-",
        "ko": "16.542"
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
