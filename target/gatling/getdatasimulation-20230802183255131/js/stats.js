var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40424",
        "ok": "34358",
        "ko": "6066"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "103",
        "ko": "93"
    },
    "maxResponseTime": {
        "total": "60036",
        "ok": "57791",
        "ko": "60036"
    },
    "meanResponseTime": {
        "total": "822",
        "ok": "249",
        "ko": "4069"
    },
    "standardDeviation": {
        "total": "6009",
        "ok": "1353",
        "ko": "14759"
    },
    "percentiles1": {
        "total": "142",
        "ok": "143",
        "ko": "133"
    },
    "percentiles2": {
        "total": "191",
        "ok": "191",
        "ko": "198"
    },
    "percentiles3": {
        "total": "470",
        "ok": "451",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "38601",
        "ok": "1021",
        "ko": "60014"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 33927,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 175,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 256,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 6066,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "134.747",
        "ok": "114.527",
        "ko": "20.22"
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
        "total": "40424",
        "ok": "34358",
        "ko": "6066"
    },
    "minResponseTime": {
        "total": "93",
        "ok": "103",
        "ko": "93"
    },
    "maxResponseTime": {
        "total": "60036",
        "ok": "57791",
        "ko": "60036"
    },
    "meanResponseTime": {
        "total": "822",
        "ok": "249",
        "ko": "4069"
    },
    "standardDeviation": {
        "total": "6009",
        "ok": "1353",
        "ko": "14759"
    },
    "percentiles1": {
        "total": "142",
        "ok": "143",
        "ko": "133"
    },
    "percentiles2": {
        "total": "191",
        "ok": "191",
        "ko": "198"
    },
    "percentiles3": {
        "total": "470",
        "ok": "451",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "38601",
        "ok": "1021",
        "ko": "60014"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 33927,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 175,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 256,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 6066,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "134.747",
        "ok": "114.527",
        "ko": "20.22"
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
