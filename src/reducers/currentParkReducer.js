var acadia = {description: "People have been drawn to the rugged coast of Maine throughout history. Awed by its beauty and diversity, early 20th-century visionaries donated the land that became Acadia National Park. The park is home to many plants and animals, and the tallest mountain on the U.S. Atlantic coast. Today visitors come to Acadia to hike granite peaks, bike historic carriage roads, or relax and enjoy the scenery.",
directionsInfo:"From Boston take I-95 north to Augusta, Maine, then Route 3 east to Ellsworth, and on to Mount Desert Island. For an alternate route, continue on I-95 north to Bangor, Maine, then take Route 1A east to Ellsworth. In Ellsworth, take Route 3 to Mount Desert Island.", directionsUrl:"http://www.nps.gov/acad/planyourvisit/directions.htm",
id: 1,
image_url: "http://i.imgur.com/X2NpNiL.jpg",
latLong: "lat:44.374358654, long:-68.2598657906",
name: "Acadia National Park",
states: "Maine",
url: "https://www.nps.gov/acad/index.htm",
weatherInfo: "Located on Mount Desert Island in Maine, Acadia experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C)."
}


export default (state=acadia, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PARK':
      return action.payload
    default:
      return state
    }
}
