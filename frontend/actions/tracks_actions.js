import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const SCROLL_TRACKS = "SCROLL_TRACKS";

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const scrollTracks = (tracks) => ({
  type: SCROLL_TRACKS,
  tracks
});

export const fetchScrollTracks = (pageOffset) => (dispatch) => (
  TrackApiUtil.fetchScrollTracks(pageOffset)
  .then((data) => dispatch(scrollTracks(data)))
);

export const fetchTracks = () => (dispatch) => (
  TrackApiUtil.fetchTracks()
  .then((data) => dispatch(receiveTracks(data)))
);

export const fetchUserTracks = (userId) => (dispatch) => (
  TrackApiUtil.fetchUserTracks(userId)
  .then((data) => dispatch(receiveTracks(data)))
);
