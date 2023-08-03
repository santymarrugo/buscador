var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "31227",
        "ok": "27843",
        "ko": "3384"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "102",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "60020",
        "ok": "59762",
        "ko": "60020"
    },
    "meanResponseTime": {
        "total": "919",
        "ok": "165",
        "ko": "7128"
    },
    "standardDeviation": {
        "total": "6714",
        "ok": "676",
        "ko": "19209"
    },
    "percentiles1": {
        "total": "129",
        "ok": "130",
        "ko": "121"
    },
    "percentiles2": {
        "total": "152",
        "ok": "150",
        "ko": "217"
    },
    "percentiles3": {
        "total": "290",
        "ok": "262",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "515",
        "ko": "60013"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 27674,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 16,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 153,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3384,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.09",
        "ok": "92.81",
        "ko": "11.28"
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
        "total": "31227",
        "ok": "27843",
        "ko": "3384"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "102",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "60020",
        "ok": "59762",
        "ko": "60020"
    },
    "meanResponseTime": {
        "total": "919",
        "ok": "165",
        "ko": "7128"
    },
    "standardDeviation": {
        "total": "6714",
        "ok": "676",
        "ko": "19209"
    },
    "percentiles1": {
        "total": "129",
        "ok": "130",
        "ko": "121"
    },
    "percentiles2": {
        "total": "152",
        "ok": "150",
        "ko": "217"
    },
    "percentiles3": {
        "total": "290",
        "ok": "262",
        "ko": "60008"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "515",
        "ko": "60013"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 27674,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 16,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 153,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3384,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.09",
        "ok": "92.81",
        "ko": "11.28"
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
