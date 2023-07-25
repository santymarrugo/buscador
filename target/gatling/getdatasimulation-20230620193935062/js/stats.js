var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11264",
        "ok": "10842",
        "ko": "422"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "102"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "30470",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "1649",
        "ok": "659",
        "ko": "27083"
    },
    "standardDeviation": {
        "total": "6692",
        "ok": "2045",
        "ko": "20392"
    },
    "percentiles1": {
        "total": "145",
        "ok": "144",
        "ko": "30669"
    },
    "percentiles2": {
        "total": "723",
        "ok": "579",
        "ko": "30902"
    },
    "percentiles3": {
        "total": "4790",
        "ok": "1823",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "30889",
        "ok": "9159",
        "ko": "60015"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8556,
    "percentage": 76
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1367,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 919,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 422,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.578",
        "ok": "60.233",
        "ko": "2.344"
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
        "total": "11264",
        "ok": "10842",
        "ko": "422"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "102"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "30470",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "1649",
        "ok": "659",
        "ko": "27083"
    },
    "standardDeviation": {
        "total": "6692",
        "ok": "2045",
        "ko": "20392"
    },
    "percentiles1": {
        "total": "145",
        "ok": "144",
        "ko": "30669"
    },
    "percentiles2": {
        "total": "723",
        "ok": "579",
        "ko": "30902"
    },
    "percentiles3": {
        "total": "4790",
        "ok": "1823",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "30889",
        "ok": "9159",
        "ko": "60015"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8556,
    "percentage": 76
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1367,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 919,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 422,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.578",
        "ok": "60.233",
        "ko": "2.344"
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
