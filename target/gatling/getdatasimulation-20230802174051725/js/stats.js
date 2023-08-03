var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50027",
        "ok": "40943",
        "ko": "9084"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "95",
        "ko": "89"
    },
    "maxResponseTime": {
        "total": "60057",
        "ok": "58948",
        "ko": "60057"
    },
    "meanResponseTime": {
        "total": "1082",
        "ok": "406",
        "ko": "4131"
    },
    "standardDeviation": {
        "total": "6598",
        "ok": "980",
        "ko": "14969"
    },
    "percentiles1": {
        "total": "146",
        "ok": "179",
        "ko": "104"
    },
    "percentiles2": {
        "total": "383",
        "ok": "436",
        "ko": "115"
    },
    "percentiles3": {
        "total": "1365",
        "ok": "1302",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "3604",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 36426,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2144,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2373,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 9084,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.757",
        "ok": "136.477",
        "ko": "30.28"
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
        "total": "50027",
        "ok": "40943",
        "ko": "9084"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "95",
        "ko": "89"
    },
    "maxResponseTime": {
        "total": "60057",
        "ok": "58948",
        "ko": "60057"
    },
    "meanResponseTime": {
        "total": "1082",
        "ok": "406",
        "ko": "4131"
    },
    "standardDeviation": {
        "total": "6598",
        "ok": "980",
        "ko": "14969"
    },
    "percentiles1": {
        "total": "146",
        "ok": "179",
        "ko": "104"
    },
    "percentiles2": {
        "total": "383",
        "ok": "436",
        "ko": "115"
    },
    "percentiles3": {
        "total": "1365",
        "ok": "1302",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "3604",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 36426,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2144,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2373,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 9084,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.757",
        "ok": "136.477",
        "ko": "30.28"
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
