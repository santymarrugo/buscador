package config

object Endpoint {

  val url_EndPoint_Token: String = Utils.readProperties("url_security_service") + "/connect/token?"
  val url_GetData: String = Utils.readProperties("url_GetData")+ "/catalog/api/v1/Autocomplete/GetData"
  //val url_GetData: String = Utils.readProperties("url_GetData")+ "/catalog/api/v1/Autocomplete-sqlgateway/GetData"//

}
