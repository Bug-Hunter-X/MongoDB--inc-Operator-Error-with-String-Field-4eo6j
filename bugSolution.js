```javascript
// Correct implementation
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { myNumber: 1 } }); 
//Or if you have to convert from string to number
db.collection('myCollection').aggregate([{$addFields: {myNumber: {$toInt: '$myString'}}}, {$project:{_id:1,myNumber:1,myString:1}}, {$match:{myNumber:{$exists:true}}},{$limit:1}])
```