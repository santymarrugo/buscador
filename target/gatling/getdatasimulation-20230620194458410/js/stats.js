var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6424",
        "ok": "5642",
        "ko": "782"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "104"
    },
    "maxResponseTime": {
        "total": "64768",
        "ok": "27720",
        "ko": "64768"
    },
    "meanResponseTime": {
        "total": "7172",
        "ok": "1616",
        "ko": "47260"
    },
    "standardDeviation": {
        "total": "17158",
        "ok": "3279",
        "ko": "22608"
    },
    "percentiles1": {
        "total": "301",
        "ok": "240",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "3441",
        "ok": "879",
        "ko": "60013"
    },
    "percentiles3": {
        "total": "60008",
        "ok": "8114",
        "ko": "60093"
    },
    "percentiles4": {
        "total": "60036",
        "ok": "17487",
        "ko": "63163"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4129,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 277,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1236,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 782,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "35.689",
        "ok": "31.344",
        "ko": "4.344"
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
        "total": "6424",
        "ok": "5642",
        "ko": "782"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "104"
    },
    "maxResponseTime": {
        "total": "64768",
        "ok": "27720",
        "ko": "64768"
    },
    "meanResponseTime": {
        "total": "7172",
        "ok": "1616",
        "ko": "47260"
    },
    "standardDeviation": {
        "total": "17158",
        "ok": "3279",
        "ko": "22608"
    },
    "percentiles1": {
        "total": "301",
        "ok": "240",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "3441",
        "ok": "879",
        "ko": "60013"
    },
    "percentiles3": {
        "total": "60008",
        "ok": "8114",
        "ko": "60093"
    },
    "percentiles4": {
        "total": "60036",
        "ok": "17487",
        "ko": "63163"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4129,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 277,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1236,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 782,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "35.689",
        "ok": "31.344",
        "ko": "4.344"
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
