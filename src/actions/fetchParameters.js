const headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
});

export const FETCH_PARAMS = {
  method: "GET",
  headers: headers
};

export const FETCH_SEARCH_URL =
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

export const FETCH_ALBUM_URL =
  "https://deezerdevs-deezer.p.rapidapi.com/album/";
