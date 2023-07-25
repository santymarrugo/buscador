var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15805",
        "ok": "15628",
        "ko": "177"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "1431",
        "ok": "1431",
        "ko": "1006"
    },
    "meanResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "124"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "126",
        "ko": "112"
    },
    "percentiles1": {
        "total": "105",
        "ok": "105",
        "ko": "99"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "105"
    },
    "percentiles3": {
        "total": "260",
        "ok": "260",
        "ko": "199"
    },
    "percentiles4": {
        "total": "834",
        "ok": "834",
        "ko": "744"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15444,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 175,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 177,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.806",
        "ok": "86.822",
        "ko": "0.983"
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
        "total": "15805",
        "ok": "15628",
        "ko": "177"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "1431",
        "ok": "1431",
        "ko": "1006"
    },
    "meanResponseTime": {
        "total": "138",
        "ok": "138",
        "ko": "124"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "126",
        "ko": "112"
    },
    "percentiles1": {
        "total": "105",
        "ok": "105",
        "ko": "99"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "105"
    },
    "percentiles3": {
        "total": "260",
        "ok": "260",
        "ko": "199"
    },
    "percentiles4": {
        "total": "834",
        "ok": "834",
        "ko": "744"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15444,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 175,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 177,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.806",
        "ok": "86.822",
        "ko": "0.983"
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
