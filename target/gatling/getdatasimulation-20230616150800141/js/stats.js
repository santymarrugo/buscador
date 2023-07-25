var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13543",
        "ok": "12899",
        "ko": "644"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "91"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "31416",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "2427",
        "ok": "1008",
        "ko": "30858"
    },
    "standardDeviation": {
        "total": "8397",
        "ok": "3200",
        "ko": "20714"
    },
    "percentiles1": {
        "total": "139",
        "ok": "134",
        "ko": "30627"
    },
    "percentiles2": {
        "total": "778",
        "ok": "630",
        "ko": "33692"
    },
    "percentiles3": {
        "total": "16789",
        "ok": "3584",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "18600",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10111,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1246,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1542,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 644,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75.239",
        "ok": "71.661",
        "ko": "3.578"
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
        "total": "13543",
        "ok": "12899",
        "ko": "644"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "91"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "31416",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "2427",
        "ok": "1008",
        "ko": "30858"
    },
    "standardDeviation": {
        "total": "8397",
        "ok": "3200",
        "ko": "20714"
    },
    "percentiles1": {
        "total": "139",
        "ok": "134",
        "ko": "30627"
    },
    "percentiles2": {
        "total": "778",
        "ok": "630",
        "ko": "33692"
    },
    "percentiles3": {
        "total": "16789",
        "ok": "3584",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "18600",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10111,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1246,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1542,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 644,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "75.239",
        "ok": "71.661",
        "ko": "3.578"
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
