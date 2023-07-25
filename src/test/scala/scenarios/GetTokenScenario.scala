package scenarios

import io.gatling.core.Predef.scenario
import requests.GetTokenRequest

object GetTokenScenario {

  val getTokenScenario = scenario("Get Token Scenario")
    .exec(GetTokenRequest.getToken())

}
