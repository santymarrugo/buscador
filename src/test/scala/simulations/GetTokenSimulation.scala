package simulations

import config.RuntimeParameters._
import io.gatling.core.Predef._
import scenarios.GetTokenScenario

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps


class GetTokenSimulation extends Simulation{
    private val getTokenExec = GetTokenScenario.getTokenScenario
      .inject(
        //rampUsers(10) during (10 second)
        rampUsers(userCount) during (rampDuration second)
      )

    setUp(getTokenExec)
      // .maxDuration(10 seconds)
      .maxDuration(testDuration seconds)

  }

  //mvn gatling:test -Dgatling.simulationClass=simulations.GetTokenSimulation -DUSERS=1 -DRAMP_DURATION=10 -DDURATION=5 -DENVIRONMENT=qa
  //mvn gatling:test -Dgatling.simulationClass=simulations.SearchAutocomplete.GetAllTopSimulation -DUSERS=10 -DRAMP_DURATION=1 -DURATION=10 -DENVIRONMENT=pre



