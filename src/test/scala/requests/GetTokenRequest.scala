package requests

import config.Endpoint.url_EndPoint_Token
import config.RuntimeParameters.environment
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object GetTokenRequest {

  val header_1 = Map(
    "Content-Type" -> "application/x-www-form-urlencoded",
    "Authorization" -> "Basic U2lpZ29XZWI6QUJBMDhCNkEtQjU2Qy00MEE1LTkwQ0YtN0MxRTU0ODkxQjYx",
    "Accept" -> "application/json"
  )
  val csvFeeder = csv("src/test/resources/data/csv-files/"+environment+"/users.csv").circular


  val tokens_writer = {
    val fos = new java.io.FileOutputStream("src/test/resources/data/csv-files/"+environment+"/tokens.csv")
    new java.io.PrintWriter(fos,true)
  }

  //Crear el encabezado del archivo CSV
  tokens_writer.println("tokens")

  def getToken() = {
    feed(csvFeeder)
      .exec(http("GetToken")
        .post(url_EndPoint_Token + "/connect/token?")
        .headers(header_1)
        .body(StringBody("grant_type=password&username=${username}&password=${password}&scope=WebApi offline_access"))
        .check(jsonPath("$.access_token").exists.saveAs("token"))
        .check(status.saveAs("statusTest")))
      .exec( session => {
        tokens_writer.println(session("token").as[String])
        session}
      )
      .exec{testData => println(testData("statusTest").as[String]);testData}
      .exec( session => {println(session("username").as[String]);session}
      )
      .pause(1)
  }

}


