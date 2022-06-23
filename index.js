
function superbowlWin(record){
    const recordResult = record.find(recordObject=> recordObject.result == "W")
    if (recordResult === undefined){
    }
    else{
      return recordResult.year;
    }
  }