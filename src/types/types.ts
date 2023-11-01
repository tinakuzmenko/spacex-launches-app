export interface Launch {
  id: string;
  mission_name: string;
  details: string;
  launch_date_local: string;
  links: {
    flickr_images: string[];
  };
  rocket: {
    rocket_name: string;
    rocket: {
      mass: {
        kg: number;
      };
    };
  };
}
