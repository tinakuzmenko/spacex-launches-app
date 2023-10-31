export interface Launch {
  id: string;
  launch_success: boolean | null;
  mission_name: string;
  details: string;
  launch_date_local: string;
  links: {
    flickr_images: string[];
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
}
