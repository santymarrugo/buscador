var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7958",
        "ok": "4983",
        "ko": "2975"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "101",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "60055",
        "ok": "6928",
        "ko": "60055"
    },
    "meanResponseTime": {
        "total": "1043",
        "ok": "398",
        "ko": "2122"
    },
    "standardDeviation": {
        "total": "6681",
        "ok": "877",
        "ko": "10782"
    },
    "percentiles1": {
        "total": "116",
        "ok": "124",
        "ko": "104"
    },
    "percentiles2": {
        "total": "145",
        "ok": "188",
        "ko": "110"
    },
    "percentiles3": {
        "total": "1769",
        "ok": "2343",
        "ko": "236"
    },
    "percentiles4": {
        "total": "59839",
        "ok": "5127",
        "ko": "60012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4453,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 121,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 409,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 2975,
    "percentage": 37
},
    "meanNumberOfRequestsPerSecond": {
        "total": "44.211",
        "ok": "27.683",
        "ko": "16.528"
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
        "total": "7958",
        "ok": "4983",
        "ko": "2975"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "101",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "60055",
        "ok": "6928",
        "ko": "60055"
    },
    "meanResponseTime": {
        "total": "1043",
        "ok": "398",
        "ko": "2122"
    },
    "standardDeviation": {
        "total": "6681",
        "ok": "877",
        "ko": "10782"
    },
    "percentiles1": {
        "total": "116",
        "ok": "124",
        "ko": "104"
    },
    "percentiles2": {
        "total": "145",
        "ok": "188",
        "ko": "110"
    },
    "percentiles3": {
        "total": "1769",
        "ok": "2343",
        "ko": "236"
    },
    "percentiles4": {
        "total": "59839",
        "ok": "5127",
        "ko": "60012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4453,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 121,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 409,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 2975,
    "percentage": 37
},
    "meanNumberOfRequestsPerSecond": {
        "total": "44.211",
        "ok": "27.683",
        "ko": "16.528"
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
