import { gql } from '@apollo/client';

/* The API doesn't filter/sort results, but if it would, we could load launches based on mission name, date etc.  */
/* This is an example query of how it could look like, but we get all launches instead */
export const getLaunchesByMissionQuery = gql`
  query Launches($mission: String!, $limit: Int, $offset: Int) {
    launches(find: { mission_name: $mission }, limit: $limit, offset: $offset) {
      id
      mission_name
      details
      launch_date_local
      links {
        flickr_images
      }
      rocket {
        rocket_name
        rocket {
          mass {
            kg
          }
        }
      }
    }
  }
`;
