var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14494",
        "ok": "14485",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "100",
        "ko": "99"
    },
    "maxResponseTime": {
        "total": "4860",
        "ok": "4860",
        "ko": "239"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "176"
    },
    "standardDeviation": {
        "total": "224",
        "ok": "224",
        "ko": "52"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "200"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "215"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "234"
    },
    "percentiles4": {
        "total": "293",
        "ok": "293",
        "ko": "238"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14378,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 101,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "80.522",
        "ok": "80.472",
        "ko": "0.05"
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
        "total": "14494",
        "ok": "14485",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "100",
        "ko": "99"
    },
    "maxResponseTime": {
        "total": "4860",
        "ok": "4860",
        "ko": "239"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "143",
        "ko": "176"
    },
    "standardDeviation": {
        "total": "224",
        "ok": "224",
        "ko": "52"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "200"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "215"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "234"
    },
    "percentiles4": {
        "total": "293",
        "ok": "293",
        "ko": "238"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14378,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 101,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "80.522",
        "ok": "80.472",
        "ko": "0.05"
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
