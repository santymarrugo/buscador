var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3614",
        "ok": "3437",
        "ko": "177"
    },
    "minResponseTime": {
        "total": "87",
        "ok": "100",
        "ko": "87"
    },
    "maxResponseTime": {
        "total": "31181",
        "ok": "3610",
        "ko": "31181"
    },
    "meanResponseTime": {
        "total": "1369",
        "ok": "243",
        "ko": "23238"
    },
    "standardDeviation": {
        "total": "5699",
        "ok": "183",
        "ko": "12632"
    },
    "percentiles1": {
        "total": "205",
        "ok": "204",
        "ko": "30141"
    },
    "percentiles2": {
        "total": "224",
        "ok": "221",
        "ko": "30180"
    },
    "percentiles3": {
        "total": "1085",
        "ok": "457",
        "ko": "30253"
    },
    "percentiles4": {
        "total": "30192",
        "ok": "1112",
        "ko": "30354"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3314,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 108,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 177,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.078",
        "ok": "19.094",
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
        "total": "3614",
        "ok": "3437",
        "ko": "177"
    },
    "minResponseTime": {
        "total": "87",
        "ok": "100",
        "ko": "87"
    },
    "maxResponseTime": {
        "total": "31181",
        "ok": "3610",
        "ko": "31181"
    },
    "meanResponseTime": {
        "total": "1369",
        "ok": "243",
        "ko": "23238"
    },
    "standardDeviation": {
        "total": "5699",
        "ok": "183",
        "ko": "12632"
    },
    "percentiles1": {
        "total": "205",
        "ok": "204",
        "ko": "30141"
    },
    "percentiles2": {
        "total": "224",
        "ok": "220",
        "ko": "30180"
    },
    "percentiles3": {
        "total": "1084",
        "ok": "457",
        "ko": "30253"
    },
    "percentiles4": {
        "total": "30192",
        "ok": "1112",
        "ko": "30354"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3314,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 108,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 177,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.078",
        "ok": "19.094",
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
