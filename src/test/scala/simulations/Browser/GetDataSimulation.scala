package scala.simulations.Browser

import config.RuntimeParameters._
import io.gatling.core.Predef._
import scenarios.Browser.GetDataScenario

import scala.concurrent.duration._
import scala.language.postfixOps

class GetDataSimulation extends Simulation{

  private val getDataExec = GetDataScenario.getDataScenario
    .inject(
      rampUsers(userCount) during (rampDuration second)
    )
  setUp(getDataExec)
    .maxDuration(testDuration second)

}

//mvn clean gatling:test -Dgatling.simulationClass=simulations.Browser.GetDataSimulation -DUSERS=1 -DRAMP_DURATION=10 -DDURATION=15 -DENVIRONMENT=qa//