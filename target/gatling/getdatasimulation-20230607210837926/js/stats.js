var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4064",
        "ok": "4019",
        "ko": "45"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "104"
    },
    "maxResponseTime": {
        "total": "19949",
        "ok": "19949",
        "ko": "497"
    },
    "meanResponseTime": {
        "total": "1196",
        "ok": "1206",
        "ko": "285"
    },
    "standardDeviation": {
        "total": "2350",
        "ok": "2361",
        "ko": "88"
    },
    "percentiles1": {
        "total": "331",
        "ok": "333",
        "ko": "298"
    },
    "percentiles2": {
        "total": "923",
        "ok": "936",
        "ko": "327"
    },
    "percentiles3": {
        "total": "5162",
        "ok": "5184",
        "ko": "399"
    },
    "percentiles4": {
        "total": "13041",
        "ok": "13125",
        "ko": "493"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2903,
    "percentage": 71
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 297,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 819,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 45,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.578",
        "ok": "22.328",
        "ko": "0.25"
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
        "total": "4064",
        "ok": "4019",
        "ko": "45"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "98",
        "ko": "104"
    },
    "maxResponseTime": {
        "total": "19949",
        "ok": "19949",
        "ko": "497"
    },
    "meanResponseTime": {
        "total": "1196",
        "ok": "1206",
        "ko": "285"
    },
    "standardDeviation": {
        "total": "2350",
        "ok": "2361",
        "ko": "88"
    },
    "percentiles1": {
        "total": "331",
        "ok": "333",
        "ko": "298"
    },
    "percentiles2": {
        "total": "923",
        "ok": "936",
        "ko": "327"
    },
    "percentiles3": {
        "total": "5162",
        "ok": "5184",
        "ko": "399"
    },
    "percentiles4": {
        "total": "13041",
        "ok": "13125",
        "ko": "493"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2903,
    "percentage": 71
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 297,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 819,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 45,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.578",
        "ok": "22.328",
        "ko": "0.25"
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
