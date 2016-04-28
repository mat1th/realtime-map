#include <ESP8266WiFi.h>
#include <ArduinoJson.h>

//setup wifi
const char* ssid     = "SWEEX1337";
const char* password = "billgatesrules";

//setup host
const char* host        = "project3.dolstra.me"; // Your domain
String getPath          = "/api/status";
String postPath         = "/api";
const int httpPort      = 80;

int sensorPin = A0; // select the input pin for the potentiometer

int sensorValue = 0; // variable to store the value coming from the sensor
int counter;

// LED's
int led1 = D0;
int led2 = D1;
int led3 = D2;
int led4 = D3;
int led5 = D4;

//change WiFiClient to client var
WiFiClient client;

void setup() {
  //set serial
  Serial.begin(9600);

  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  pinMode(led5, OUTPUT);

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

// the loop function
void loop() {
  sensorValue = analogRead (sensorPin);
  
  delay (100);
  
  Serial.print (sensorValue, DEC);
  Serial.print(" ");
  counter++;
  if(counter==30){
    Serial.println();
    counter = 0;
  }

  //if the connection is faild with the website
  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed!!");
    return;
  }

  //get the light status
  getNetworkData();

  delay(2000);

  //post the data to the site
  sendNetworkData();
}

//get request to the site
void getNetworkData() {
  client.print(String("GET ") + getPath + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" +
               "Connection: keep-alive\r\n\r\n");

  delay(500); // wait for server to respond

  // read response
  String section = "header";
  while (client.available()) {

    //get every line form response if connection is open
    String line = client.readStringUntil('\r');
    // insprired http://blog.nyl.io/esp8266-led-arduino/
    // parse the json
    if (section == "header") { // headers..
      if (line == "\n") { // skip the enter
        section = "json";
      }
    }
    else if (section == "json") {  // if it's json data
      section = "ignore";
      String result = line.substring(1);

      // Parse JSON
      int size = result.length() + 1;
      char json[size]; // get the json size

      result.toCharArray(json, size);
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& json_parsed = jsonBuffer.parseObject(json);

      if (!json_parsed.success()) //if its faild to parse
      {
        Serial.println("parseObject() failed");
        return;
      }

      //turn on the alarm if the alarm is true
      if (strcmp(json_parsed["led"], "true") == 0) {
        digitalWrite(led1, HIGH);
        delay(500);
        digitalWrite(led2, HIGH);
        delay(500);
        digitalWrite(led3, HIGH);
        delay(500);
        digitalWrite(led4, HIGH);
        delay(500);
        digitalWrite(led5, HIGH);
        
        Serial.println("LED ON");
      }
      else{
        digitalWrite(led1, LOW);
        digitalWrite(led2, LOW);
        digitalWrite(led3, LOW);
        digitalWrite(led4, LOW);
        digitalWrite(led5, LOW);
        
        Serial.println("LED OFF");
       }
    }
  }
  Serial.println(" closing connection. ");
}

// post to the server
void sendNetworkData() {

  //post to the server if
  if (client.connect(host, httpPort)) {
    String postStr = "value1=";
    postStr += String(sensorValue);
    postStr += "&value2=";
     postStr += "true";
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
