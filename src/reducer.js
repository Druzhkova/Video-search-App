import {
  GET_VIDEO_FAILURE,
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
  GET_MORE_VIDEO_FAILURE,
  GET_MORE_VIDEO_REQUEST,
  GET_MORE_VIDEO_SUCCESS,
  DELETE_VIDEO_DATA,
} from './actions';

const initialState = {
  videoData: null,
  loading: false,
  errorMessage: null,
  loadingMore: false,
  maxResults: 20,
};

export function serchAppReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEO_SUCCESS: {
      return {
        ...state,
        videoData: action.payload.items,
        loading: false,
      };
    }

    case GET_VIDEO_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    }

    case GET_VIDEO_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
      };
    }

    case GET_MORE_VIDEO_SUCCESS: {
      return {
        ...state,
        videoData: {
          ...action.payload,
        },
        loadingMore: false,
      };
    }

    case GET_MORE_VIDEO_REQUEST: {
      return {
        ...state,
        loadingMore: true,
        errorMessage: null,
      };
    }

    case GET_MORE_VIDEO_FAILURE: {
      return {
        ...state,
        loadingMore: false,
        errorMessage: action.payload,
      };
    }

    case DELETE_VIDEO_DATA: {
      return {
        ...state,
        videoData: null,
      };
    }

    default: return state;
  }
}
