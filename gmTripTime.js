const GM_TRIPTIME = (start, finish, transportation = 'driving') => {
    const { routes: [data] = [] } = Maps.newDirectionFinder()
        .setStart(start)
        .setFinish(finish)
        .setTransportation(transportation)
        .getDirections();
        if (!data) {
            throw new Error('Error: No route possible');
          }
          
    const { legs: [{ duration: { text: time } } = {}] = [] } = data;
    return time;
  };