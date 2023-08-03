var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4290",
        "ok": "2272",
        "ko": "2018"
    },
    "minResponseTime": {
        "total": "109",
        "ok": "109",
        "ko": "122"
    },
    "maxResponseTime": {
        "total": "37996",
        "ok": "34515",
        "ko": "37996"
    },
    "meanResponseTime": {
        "total": "2818",
        "ok": "1232",
        "ko": "4605"
    },
    "standardDeviation": {
        "total": "8133",
        "ok": "4149",
        "ko": "10733"
    },
    "percentiles1": {
        "total": "180",
        "ok": "161",
        "ko": "187"
    },
    "percentiles2": {
        "total": "250",
        "ok": "297",
        "ko": "225"
    },
    "percentiles3": {
        "total": "30123",
        "ok": "8770",
        "ko": "30167"
    },
    "percentiles4": {
        "total": "30459",
        "ok": "23273",
        "ko": "33807"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1987,
    "percentage": 46
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 76,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 209,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 2018,
    "percentage": 47
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.833",
        "ok": "12.622",
        "ko": "11.211"
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
        "total": "4290",
        "ok": "2272",
        "ko": "2018"
    },
    "minResponseTime": {
        "total": "109",
        "ok": "109",
        "ko": "122"
    },
    "maxResponseTime": {
        "total": "37996",
        "ok": "34515",
        "ko": "37996"
    },
    "meanResponseTime": {
        "total": "2818",
        "ok": "1232",
        "ko": "4605"
    },
    "standardDeviation": {
        "total": "8133",
        "ok": "4149",
        "ko": "10733"
    },
    "percentiles1": {
        "total": "180",
        "ok": "161",
        "ko": "187"
    },
    "percentiles2": {
        "total": "250",
        "ok": "298",
        "ko": "225"
    },
    "percentiles3": {
        "total": "30124",
        "ok": "8770",
        "ko": "30167"
    },
    "percentiles4": {
        "total": "30459",
        "ok": "23273",
        "ko": "33807"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1987,
    "percentage": 46
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 76,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 209,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 2018,
    "percentage": 47
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.833",
        "ok": "12.622",
        "ko": "11.211"
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
