function searchParty(target, world) {
  for (let location in world) {
    const locationInfo = world[location];
    console.log(location);
    console.log(locationInfo);
    // {...} = ''
    if (typeof locationInfo === 'object' && !Array.isArray(locationInfo)) {
      
      // recursice case
      const nestedLocation = locationInfo;
      console.log('recursive case!', locationInfo);
      // pathInNested => ['bedroom']
      const pathInNested = searchParty(target, nestedLocation);
      // pathInNested => [] I found it!
      // pathInNested => null did not find it
      if (pathInNested === null ) {
        // i didnt find it, dont do anything
      }
      else if (pathInNested) { // []
        // then we found it!
        return [location].concat(pathInNested);
      }
    } else if(Array.isArray(locationInfo)) {
      console.log('dealing with an array', locationInfo);

      // if it's found somewhere in the array
      // i just want to return [location]
      if (locationInfo.includes(target)) {
        return [location];
      }

      // if it wasn't found do nothing
    } else {
      // base case
      if (locationInfo === target) {
        return [location];
      }
    }


  }
  
  return null;
}

const newWorld = {
  upstairs: {
    office: 'Pusheen',
  },
  kitchen : ['Evan', 'Sulamita'],
  'living room': 'Maureen',
}

searchParty('Sulamita', newWorld); // ['kitchen']