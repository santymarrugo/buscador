package config

import java.io._
import java.util._
import config.RuntimeParameters.environment

object Utils {

  def readProperties(nameProperty: String): String = {
    val grades = new Properties()
    val in = new FileInputStream("src/test/scala/environment/environment" + environment + ".properties")
    grades.load(in)
    in.close()
    grades.getProperty(nameProperty)
  }
}
