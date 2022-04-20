/**
 * This module implements the query resolver logic for 
 * - the list of speakers related to sessions
*/
module.exports = {
  async speakers(session, args, { dataSources}) {
    const speakers = await dataSources.speakerAPI.getSpeakers();

    const toReturn = speakers.filter((speaker) => {
      //Pass in the array of speakers and the object property followed by a predicate. 
      return _.filter(session.speakers, { id: speaker.id }).length > 0;
    });  
    return toReturn;
  },

};


