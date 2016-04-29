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

// Range Pins
const int echoPin       = D1;
const int trigPin       = D0;

// Distance
int maximumRange = 500; // Maximum range needed
long duration, distance; // Duration used to calculate distance


//change WiFiClient to client var
WiFiClient client;

void setup () 
{

   //set range sensor
  pinMode(echoPin, INPUT);
  pinMode(trigPin, OUTPUT);
  
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
    /* The following trigPin/echoPin cycle is used to determine the
  distance of the nearest object by bouncing soundwaves off of it. */ 
  digitalWrite(trigPin, LOW); 
  delayMicroseconds(2); 
  
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10); 
  
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  
  //Calculate the distance (in cm) based on the speed of sound.
  distance = duration/58.2;
 
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
    String postStr = "value1=";
    postStr += String(sensorValue);
    postStr += "&value2=";
    
    if (distance < maximumRange){
      postStr += "true";
      }
      else{
        postStr += "false";
        }
        
    postStr += "&sensorId=";
    postStr += "a43153cf-93f3-4c82-947d-b9d993edab36";

    
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

   if (!client.connect(host, httpPort)) {
    Serial.println("connection failed!!");
    return;
  }

  delay(60000);
 }
