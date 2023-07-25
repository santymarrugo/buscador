package config

object RuntimeParameters {

  private def getProperty(propertyName: String, defaultValue: String) = {
    Option(System.getenv(propertyName))
      .orElse(Option(System.getProperty(propertyName)))
      .getOrElse(defaultValue)
  }

  def userCount: Int = getProperty("USERS", "10").toInt
  def rampDuration: Int = getProperty("RAMP_DURATION", "10").toInt
  def testDuration: Int = getProperty("DURATION", "40").toInt
  def environment: String = getProperty("ENVIRONMENT", "qa")


  println("Running test with " + userCount + " users")
  println("Ramping users over " + rampDuration + " seconds")
  println("Total test duration: " + testDuration + " seconds")
  println("Test environment: " + environment )


}
