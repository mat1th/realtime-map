#include <ESP8266WiFi.h>

//setup wifi
const char* ssid     = "SWEEX1337";
const char* password = "billgatesrules";

//setup host
const char* host        = "project3.dolstra.me"; // Your domain
String postPath         = "/api";
const int httpPort      = 80;

int sensorPin = A0; // select the input pin for the potentiometer

int sensorValue = 0; // variable to store the value coming from the sensor
int counter;

//change WiFiClient to client var
WiFiClient client;

void setup () 
{
  Serial.begin (9600);
  
  Serial.println("Connecting to ");
  Serial.println(ssid);
  //start wifi
  WiFi.begin(ssid, password);
  int wifi_ctr = 0;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  //print when wifi is connected
  Serial.println("WiFi connected");
  Serial.println("IP address: " + WiFi.localIP());
}
 
void loop () 
{
  sensorValue = analogRead (sensorPin);

  delay (100);
  
  Serial.print (sensorValue, DEC);
  Serial.print(" ");
  counter++;
  if(counter==30){
    Serial.println();
    counter = 0;
  }

  //post to the server if
  if (client.connect(host, httpPort)) {
    String postStr = "sensor=";
    postStr += String(sensorValue);
    postStr += "&sensorId=";
    postStr += "53180077-cfc9-49b7-b807-ec01cd02b4d4";
      
    //post headers
    client.println("POST /api HTTP/1.1");
    client.println("Host: " + String(host));
    client.println("Content-Type: application/x-www-form-urlencoded");
    
    client.println("Connection: close");
    client.print("Content-Length: ");
    client.println(postStr.length());
    client.println();
    client.print(postStr);
    client.println();
    Serial.println("Data send");
  }
 }
