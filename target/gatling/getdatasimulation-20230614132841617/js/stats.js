var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7568",
        "ok": "7483",
        "ko": "85"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "98"
    },
    "maxResponseTime": {
        "total": "5389",
        "ok": "5389",
        "ko": "1024"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "141"
    },
    "standardDeviation": {
        "total": "187",
        "ok": "187",
        "ko": "144"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "107"
    },
    "percentiles2": {
        "total": "130",
        "ok": "131",
        "ko": "118"
    },
    "percentiles3": {
        "total": "506",
        "ok": "508",
        "ko": "199"
    },
    "percentiles4": {
        "total": "1019",
        "ok": "1018",
        "ko": "860"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7288,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 162,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 33,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 85,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.044",
        "ok": "41.572",
        "ko": "0.472"
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
        "total": "7568",
        "ok": "7483",
        "ko": "85"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "98"
    },
    "maxResponseTime": {
        "total": "5389",
        "ok": "5389",
        "ko": "1024"
    },
    "meanResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "141"
    },
    "standardDeviation": {
        "total": "187",
        "ok": "187",
        "ko": "144"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "107"
    },
    "percentiles2": {
        "total": "130",
        "ok": "130",
        "ko": "118"
    },
    "percentiles3": {
        "total": "506",
        "ok": "508",
        "ko": "199"
    },
    "percentiles4": {
        "total": "1019",
        "ok": "1018",
        "ko": "860"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7288,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 162,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 33,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 85,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.044",
        "ok": "41.572",
        "ko": "0.472"
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
