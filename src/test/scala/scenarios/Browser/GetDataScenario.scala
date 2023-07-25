package scenarios.Browser

import io.gatling.core.Predef._
import requests.Browser.GetDataRequest

object GetDataScenario {

  val getDataScenario = scenario("Get Data Scenario")
    .forever(){
      exec(GetDataRequest.getData())
    }

}
