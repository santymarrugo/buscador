var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "41261",
        "ok": "29187",
        "ko": "12074"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "102",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "60091",
        "ok": "59174",
        "ko": "60091"
    },
    "meanResponseTime": {
        "total": "1699",
        "ok": "553",
        "ko": "4470"
    },
    "standardDeviation": {
        "total": "8256",
        "ok": "801",
        "ko": "14850"
    },
    "percentiles1": {
        "total": "234",
        "ok": "295",
        "ko": "107"
    },
    "percentiles2": {
        "total": "579",
        "ok": "610",
        "ko": "254"
    },
    "percentiles3": {
        "total": "2809",
        "ok": "1618",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "4438",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23669,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2560,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2958,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 12074,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "137.537",
        "ok": "97.29",
        "ko": "40.247"
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
        "total": "41261",
        "ok": "29187",
        "ko": "12074"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "102",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "60091",
        "ok": "59174",
        "ko": "60091"
    },
    "meanResponseTime": {
        "total": "1699",
        "ok": "553",
        "ko": "4470"
    },
    "standardDeviation": {
        "total": "8256",
        "ok": "801",
        "ko": "14850"
    },
    "percentiles1": {
        "total": "234",
        "ok": "295",
        "ko": "107"
    },
    "percentiles2": {
        "total": "579",
        "ok": "610",
        "ko": "254"
    },
    "percentiles3": {
        "total": "2802",
        "ok": "1618",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "4438",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23669,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2560,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2958,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 12074,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "137.537",
        "ok": "97.29",
        "ko": "40.247"
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
