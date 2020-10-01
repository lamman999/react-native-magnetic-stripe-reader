# react-native-magnetic-stripe-reader

## Getting started

`$ npm install react-native-magnetic-stripe-reader --save`

### Mostly automatic installation

`$ react-native link react-native-magnetic-stripe-reader`
## Note
This library works only in Android environment. The iOS version is on the development phase.
## Usage
```javascript
import MagneticStripeReader from 'react-native-magnetic-stripe-reader';

...
useEffect(()=>{
    //1: BankCardTrackData, 2: BankCardInformation
    const type = 1;
    MagneticStripeReader.readBankCardData('%B5350290149123123123213345177^FATEHI/SUALEH^16042010000000000000000000000000000567001000?', type, (data) => {
      console.log(data);
    });
});
...
```
## Output
BankCardTrackData
```javascript
{
  "TRACK1": {
    "discretionaryData": "0000000000000000000000000000567001000",
    "name": "Sualeh Fatehi",
    "expirationDate": "2016-04",
    "primaryAccountNumber:": "5350290149345177",
    "rawData": "%B5350290149345177^FATEHI/SUALEH^16042010000000000000000000000000000567001000?"
  },
  "TRACK2": {
    "discretionaryData": "0000000000000000000000000000567001000",
    "expirationDate": "2016-04",
    "primaryAccountNumber:": "5350290149345177",
    "rawData": ";5350290149345177=16042010000056700100?"
  },
  "message": "ok",
  "success": true
}
```
BankCardInformation
```javascript
{
  "serviceCode2": {
    "description": "Authorization Processing: Normal.",
    "code": 0
  },
  "serviceCode3": {
    "description": "Allowed Services: No restrictions. PIN Requirements: None.",
    "code": 1
  },
  "serviceCode1": {
    "description": "Interchange: International interchange. Technology: Integrated circuit card.",
    "code": 2
  },
  "isExpired": true,
  "expirationDate": "2016-04",
  "passesLuhnCheck": true,
  "isPrimaryAccountNumberValid": true,
  "success": true,
  "cardBrand": "MasterCard",
  "name": "Sualeh Fatehi",
  "issuerIdentificationNumber": "535029",
  "message": "ok",
  "primaryAccountNumber": "5350290149345177",
  "lastFourDigits": "5177",
  "majorIndustryIdentifier": "mii_5",
  "rawAccountNumber": "5350290149345177"
}
```
No data found
```javascript
{
  "message":"No data found",
  "success":false
}
```
