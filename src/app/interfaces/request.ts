import { Movie } from "./movie";

export interface RequestPage {
    page: number,
  results: Array<Movie>,
  total_pages: number,
  total_results: number
}
export interface RequestPageAddToWatchlist {
    success: boolean,
    status_code: number,
    status_message: string
}


