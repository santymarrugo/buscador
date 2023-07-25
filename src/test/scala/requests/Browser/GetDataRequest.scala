package requests.Browser

import config.Endpoint.url_GetData
import config.RuntimeParameters._
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object GetDataRequest {

  val headersMap = Map(
    "Authorization" -> "${token}",
    "Accept" -> "*/*",
    "Accept-Encoding" -> "gzip, deflate, br",
    "Connection" -> "keep-alive"
  )

  val tokensFeeder = csv("src/test/resources/data/csv-files/"+environment+"/tokens.csv").circular

  val browserid = csv("src/test/resources/data/csv-files/qa/browserid.csv").circular

  def getData()={
    feed(tokensFeeder)
      .feed(browserid)
      .exec(http("Get Data")
        .post(url_GetData)
        .headers(headersMap)
        .header("Authorization", "${tokens}")
        .body(ElFileBody("src/test/resources/data/json-files/get-data.json")).asJson
        .check(jsonPath("$").saveAs("bodyResponse"))
        .check(status.is(200))
      )
      .exec{session => println(session("bodyResponse").as[String]);session}
      .exec( session => {println(session("browserID").as[String]);session}


      )//.exec( session => {println(session("tokens").as[String]);session}
  }
    .pause(1)

}

