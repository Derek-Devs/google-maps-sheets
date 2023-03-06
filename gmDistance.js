//Google Sheets Script to calculate the distance between two points

const GM_DISTANCE = (start, finish, transportation) => {
    const { routes: [data] = [] } = Maps.newDirectionFinder()
      .setStart(start)
      .setFinish(finish)
      .setTransportation(transportation)
      .getDirections();
  
    if (!data) {
      throw new Error('Error: No route possible');
    }
  
    const { legs: [{ distance: { text: distance } } = {}] = [] } = data;
    return distance;
  };