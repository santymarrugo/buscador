var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12722",
        "ok": "12100",
        "ko": "622"
    },
    "minResponseTime": {
        "total": "110",
        "ok": "110",
        "ko": "307"
    },
    "maxResponseTime": {
        "total": "33601",
        "ok": "6481",
        "ko": "33601"
    },
    "meanResponseTime": {
        "total": "1703",
        "ok": "584",
        "ko": "23477"
    },
    "standardDeviation": {
        "total": "5685",
        "ok": "439",
        "ko": "12598"
    },
    "percentiles1": {
        "total": "490",
        "ok": "487",
        "ko": "30284"
    },
    "percentiles2": {
        "total": "564",
        "ok": "548",
        "ko": "30405"
    },
    "percentiles3": {
        "total": "3004",
        "ok": "1009",
        "ko": "30701"
    },
    "percentiles4": {
        "total": "30426",
        "ok": "3163",
        "ko": "31273"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11018,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 662,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 420,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 622,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "70.678",
        "ok": "67.222",
        "ko": "3.456"
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
        "total": "12722",
        "ok": "12100",
        "ko": "622"
    },
    "minResponseTime": {
        "total": "110",
        "ok": "110",
        "ko": "307"
    },
    "maxResponseTime": {
        "total": "33601",
        "ok": "6481",
        "ko": "33601"
    },
    "meanResponseTime": {
        "total": "1703",
        "ok": "584",
        "ko": "23477"
    },
    "standardDeviation": {
        "total": "5685",
        "ok": "439",
        "ko": "12598"
    },
    "percentiles1": {
        "total": "490",
        "ok": "487",
        "ko": "30284"
    },
    "percentiles2": {
        "total": "564",
        "ok": "549",
        "ko": "30405"
    },
    "percentiles3": {
        "total": "3005",
        "ok": "1009",
        "ko": "30701"
    },
    "percentiles4": {
        "total": "30426",
        "ok": "3163",
        "ko": "31273"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11018,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 662,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 420,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 622,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "70.678",
        "ok": "67.222",
        "ko": "3.456"
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
