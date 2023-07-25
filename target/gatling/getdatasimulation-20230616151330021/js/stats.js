var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7934",
        "ok": "7202",
        "ko": "732"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "93"
    },
    "maxResponseTime": {
        "total": "60157",
        "ok": "32179",
        "ko": "60157"
    },
    "meanResponseTime": {
        "total": "5235",
        "ok": "846",
        "ko": "48416"
    },
    "standardDeviation": {
        "total": "15401",
        "ok": "2965",
        "ko": "20741"
    },
    "percentiles1": {
        "total": "137",
        "ok": "128",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "532",
        "ok": "271",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "3274",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "18056",
        "ko": "60086"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6169,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 352,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 681,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 732,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "44.078",
        "ok": "40.011",
        "ko": "4.067"
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
        "total": "7934",
        "ok": "7202",
        "ko": "732"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "93"
    },
    "maxResponseTime": {
        "total": "60157",
        "ok": "32179",
        "ko": "60157"
    },
    "meanResponseTime": {
        "total": "5235",
        "ok": "846",
        "ko": "48416"
    },
    "standardDeviation": {
        "total": "15401",
        "ok": "2965",
        "ko": "20741"
    },
    "percentiles1": {
        "total": "137",
        "ok": "128",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "532",
        "ok": "271",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "3274",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "18056",
        "ko": "60086"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6169,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 352,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 681,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 732,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "44.078",
        "ok": "40.011",
        "ko": "4.067"
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
