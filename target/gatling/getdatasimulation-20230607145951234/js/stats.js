var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6295",
        "ok": "5731",
        "ko": "564"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "103",
        "ko": "96"
    },
    "maxResponseTime": {
        "total": "48181",
        "ok": "5575",
        "ko": "48181"
    },
    "meanResponseTime": {
        "total": "1844",
        "ok": "595",
        "ko": "14535"
    },
    "standardDeviation": {
        "total": "6045",
        "ok": "858",
        "ko": "14948"
    },
    "percentiles1": {
        "total": "315",
        "ok": "311",
        "ko": "5484"
    },
    "percentiles2": {
        "total": "435",
        "ok": "398",
        "ko": "30232"
    },
    "percentiles3": {
        "total": "5301",
        "ok": "2191",
        "ko": "32449"
    },
    "percentiles4": {
        "total": "30698",
        "ok": "4609",
        "ko": "44883"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4857,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 280,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 594,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 564,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "34.972",
        "ok": "31.839",
        "ko": "3.133"
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
        "total": "6295",
        "ok": "5731",
        "ko": "564"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "103",
        "ko": "96"
    },
    "maxResponseTime": {
        "total": "48181",
        "ok": "5575",
        "ko": "48181"
    },
    "meanResponseTime": {
        "total": "1844",
        "ok": "595",
        "ko": "14535"
    },
    "standardDeviation": {
        "total": "6045",
        "ok": "858",
        "ko": "14948"
    },
    "percentiles1": {
        "total": "315",
        "ok": "311",
        "ko": "5484"
    },
    "percentiles2": {
        "total": "435",
        "ok": "398",
        "ko": "30232"
    },
    "percentiles3": {
        "total": "5301",
        "ok": "2191",
        "ko": "32449"
    },
    "percentiles4": {
        "total": "30698",
        "ok": "4609",
        "ko": "44883"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4857,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 280,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 594,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 564,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "34.972",
        "ok": "31.839",
        "ko": "3.133"
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
