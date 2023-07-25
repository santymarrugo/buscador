var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18573",
        "ok": "14986",
        "ko": "3587"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "90",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "29101",
        "ok": "29101",
        "ko": "6680"
    },
    "meanResponseTime": {
        "total": "877",
        "ok": "1063",
        "ko": "96"
    },
    "standardDeviation": {
        "total": "2463",
        "ok": "2708",
        "ko": "138"
    },
    "percentiles1": {
        "total": "202",
        "ok": "491",
        "ko": "91"
    },
    "percentiles2": {
        "total": "672",
        "ok": "762",
        "ko": "93"
    },
    "percentiles3": {
        "total": "2929",
        "ok": "3134",
        "ko": "102"
    },
    "percentiles4": {
        "total": "18801",
        "ok": "19394",
        "ko": "111"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11518,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 942,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2526,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 3587,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "103.183",
        "ok": "83.256",
        "ko": "19.928"
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
        "total": "18573",
        "ok": "14986",
        "ko": "3587"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "90",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "29101",
        "ok": "29101",
        "ko": "6680"
    },
    "meanResponseTime": {
        "total": "877",
        "ok": "1063",
        "ko": "96"
    },
    "standardDeviation": {
        "total": "2463",
        "ok": "2708",
        "ko": "138"
    },
    "percentiles1": {
        "total": "202",
        "ok": "491",
        "ko": "91"
    },
    "percentiles2": {
        "total": "672",
        "ok": "762",
        "ko": "93"
    },
    "percentiles3": {
        "total": "2929",
        "ok": "3134",
        "ko": "102"
    },
    "percentiles4": {
        "total": "18801",
        "ok": "19394",
        "ko": "111"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11518,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 942,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2526,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "count": 3587,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "103.183",
        "ok": "83.256",
        "ko": "19.928"
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
