import { gql } from '@apollo/client';

// @todo check if we want to add limit or filter
export const getLaunchesQuery = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
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
      }
    }
  }
`;

export const getLaunchesByMissionQuery = gql`
  query Launches($mission: String!) {
    launches(find: { mission_name: $mission }) {
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
      }
    }
  }
`;
