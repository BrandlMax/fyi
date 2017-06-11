//Declare Variables
var quality; // the quality choose in Spotify (kbits/s)
var monthlyTarifCost; //how much does the user pays each month
var monthlyTarifGB;// how many Gigabytes does the user gets with this Tarif
var megabytesPremium; // the amount of MB free to hear music in the users Handy
var expensPhone; //this is the cost of the more expensive phone with more storage space
var cheapPhone; //this is the cost of the less expensive phone with less storage space
var numberOfMonthsPhone;//that the smartphone cost the same
var numberOfMonths;//number of months that we do the calculation
var timeMusicSpotifyapp;
var numberOfSongs;
var timeMusicFree = (timeMusicTotal-timeMusicPremium);
var CostStudent = 4.99;

// Some functions
var smartphoneDif =  function (expensPhone,cheapPhone,numberOfMonthsPhone){
  smartphoneDif = (expensPhone - cheapPhone)/numberOfMonths
}

//calculates how much more the user would pay or is paying for the more expensive smartphone
var timeMusicPremium = function(megabytesPremium,quality){
  timeMusicPremium = megabytesPremium/(0,45*quality);
}

//how much time can the User hear music acording to his storage capacity
var aproxTotalTime = function(numberOfSongs){
  aproxTotalTime = ((3*numberOfSongs)/60);
}

// gives an aproximate time the user hear to music
var timeMusicTotal= function(aproxTotalTime,timeMusicSpotifyapp){
  // if (the user know how much time they listen to music){
  // timeMusicTotal = this value}
  // if (the user choose to write how many songs they hear){
  // timeMusicTotal = aproxTotalTime}
  // if (there is a way to take this information from spotify directly){
  // timeMusicTotal = timeMusicSpotifyapp}
}
var CostPremium = function(CostPremium,CostStudent){
  // if (CostPremium is selected){
  //   CostPremium = 9,99;
  // }
  // if (CostStudent is selected){
  //   CostPremium = CostStudent;
  // }
  // if (the user only uses SpotifyFree){
  //   CostPremium = 0;
  // }
}
var CostFreeStreaming = function(timeMusicTotal,timeMusicPremium,monthlyTarifCost,quality,monthlyTarifGB,megabytesPremium){
  if ((timeMusicTotal-timeMusicPremium)>0){
    CostFreeStreaming = ((monthlyTarifCost*quality*0,45)/(monthlyTarifGB*1000))*(timeMusicTotal-(megabytesPremium/(quality*0,45)))
  }else {CostFreeStreaming =0}
}

//How much does it cost the music heard by streaming
var CostEachMonth = function(){
  CostEachMonth = smartphoneDif + CostPremium + CostFreeStreaming
}

// the Sum of the difference between smartphone,plus the cost of the premium tarif if used, plus the cost of the streamed music
var CostOfYear = function (){
  // if (each months cost the same) {}
  //   CostOfYear = numberOfMonths*CostEachMonth
  //how do i compare each cost? should i create a Cost of the month Array? and then compare the elements based on the positon in this array?
  // if (the cost of the months are different){
  //   we need to add each month separately
  // CostOfJan + CostOfFeb + CostOfMar + CostOfApril + CostOfMay + ...
  //this is probably a for loop?
  // }
}
