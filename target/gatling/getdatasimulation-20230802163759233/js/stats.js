var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "28783",
        "ok": "21912",
        "ko": "6871"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "100",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "60038",
        "ok": "53655",
        "ko": "60038"
    },
    "meanResponseTime": {
        "total": "1972",
        "ok": "913",
        "ko": "5350"
    },
    "standardDeviation": {
        "total": "9353",
        "ok": "4545",
        "ko": "16898"
    },
    "percentiles1": {
        "total": "133",
        "ok": "151",
        "ko": "105"
    },
    "percentiles2": {
        "total": "286",
        "ok": "347",
        "ko": "119"
    },
    "percentiles3": {
        "total": "1833",
        "ok": "1596",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "34932",
        "ko": "60013"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19511,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 928,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1473,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 6871,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.943",
        "ok": "73.04",
        "ko": "22.903"
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
        "total": "28783",
        "ok": "21912",
        "ko": "6871"
    },
    "minResponseTime": {
        "total": "90",
        "ok": "100",
        "ko": "90"
    },
    "maxResponseTime": {
        "total": "60038",
        "ok": "53655",
        "ko": "60038"
    },
    "meanResponseTime": {
        "total": "1972",
        "ok": "913",
        "ko": "5350"
    },
    "standardDeviation": {
        "total": "9353",
        "ok": "4545",
        "ko": "16898"
    },
    "percentiles1": {
        "total": "133",
        "ok": "151",
        "ko": "105"
    },
    "percentiles2": {
        "total": "286",
        "ok": "347",
        "ko": "119"
    },
    "percentiles3": {
        "total": "1833",
        "ok": "1596",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "34932",
        "ko": "60013"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19511,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 928,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1473,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 6871,
    "percentage": 24
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.943",
        "ok": "73.04",
        "ko": "22.903"
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
