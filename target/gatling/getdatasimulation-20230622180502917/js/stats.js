var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6971",
        "ok": "6629",
        "ko": "342"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "170"
    },
    "maxResponseTime": {
        "total": "31219",
        "ok": "2898",
        "ko": "31219"
    },
    "meanResponseTime": {
        "total": "1464",
        "ok": "333",
        "ko": "23385"
    },
    "standardDeviation": {
        "total": "5707",
        "ok": "246",
        "ko": "12550"
    },
    "percentiles1": {
        "total": "291",
        "ok": "290",
        "ko": "30169"
    },
    "percentiles2": {
        "total": "321",
        "ok": "316",
        "ko": "30219"
    },
    "percentiles3": {
        "total": "1774",
        "ok": "518",
        "ko": "30299"
    },
    "percentiles4": {
        "total": "30234",
        "ok": "1849",
        "ko": "30481"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6451,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 40,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 138,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 342,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.728",
        "ok": "36.828",
        "ko": "1.9"
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
        "total": "6971",
        "ok": "6629",
        "ko": "342"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "170"
    },
    "maxResponseTime": {
        "total": "31219",
        "ok": "2898",
        "ko": "31219"
    },
    "meanResponseTime": {
        "total": "1464",
        "ok": "333",
        "ko": "23385"
    },
    "standardDeviation": {
        "total": "5707",
        "ok": "246",
        "ko": "12550"
    },
    "percentiles1": {
        "total": "291",
        "ok": "290",
        "ko": "30169"
    },
    "percentiles2": {
        "total": "321",
        "ok": "316",
        "ko": "30219"
    },
    "percentiles3": {
        "total": "1774",
        "ok": "518",
        "ko": "30299"
    },
    "percentiles4": {
        "total": "30234",
        "ok": "1849",
        "ko": "30481"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6451,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 40,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 138,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 342,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.728",
        "ok": "36.828",
        "ko": "1.9"
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
