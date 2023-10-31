import { gql } from '@apollo/client';

export const getLaunchesByMissionQuery = gql`
  query Launches($mission: String!, $limit: Int) {
    launches(find: { mission_name: $mission }, limit: $limit) {
      id
      launch_success
      mission_name
      details
      launch_date_local
      links {
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
        rocket {
          mass {
            kg
          }
        }
      }
    }
  }
`;
