import { AnyAction } from "redux";
import lotusApi from "../../api";
import {
  adding,
  fetching,
  editing,
  deleting,
  selecting,
  toggling,
} from "./dispatchTypes";
import { ThunkDispatch } from "redux-thunk";
//eslint-disable-next-line
import { dataTypes, data } from "../types";
import { PostAction } from "../interface";
const auth = "Bearer ";
export const addData = <T>(
  data: data,
  url: string,
  dataTypes: dataTypes
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const response = await lotusApi.post(`/api/blog/${url}`, data, {
      headers: {
        Authorization: auth + localStorage.getItem("token"),
      },
    });
    // dispatch(registering(response.data));

    dispatch(adding<T>(response.data, dataTypes));
    return true;
  } catch (error) {
    // console.log(error);

    return error;
  }
};
export const fetchCollection = <T>(url: string, dataTypes: dataTypes) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    const response = await lotusApi.get(`/api/blog/${url}`);
    // dispatch(registering(response.data));
    dispatch(fetching<T>(response.data, dataTypes));
  } catch (error) {
    // console.log(error);

    return error;
  }
};
export const updateData = <T>(
  data: data,
  url: string,
  dataTypes: dataTypes
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const response = await lotusApi.put(`/api/blog/${url}`, data, {
      headers: {
        Authorization: auth + localStorage.getItem("token"),
      },
    });
    // dispatch(registering(response.data));
    dispatch(editing<T>(response.data, dataTypes));
    return true;
  } catch (error) {
    // console.log(error);

    return error;
  }
};
export const deleteData = <T>(
  data: data,
  url: string,
  dataTypes: dataTypes
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    await lotusApi.delete(`/api/blog/${url}`, {
      headers: {
        Authorization: auth + localStorage.getItem("token"),
      },
    });
    // dispatch(registering(response.data));
    dispatch(deleting<T>(data, dataTypes));
    return true;
  } catch (error) {
    // console.log(error);

    return error;
  }
};
export const selectData = <T>(url: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    const response = await lotusApi.get(`/api/blog/${url}`);
    // dispatch(registering(response.data));
    // console.log("getting posts", response);

    dispatch(selecting<T>(response.data));
  } catch (error) {
    // console.log(error);

    return error;
  }
};
export const toggle = (typeToggle: string, id: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    const result = await lotusApi.patch(
      `/api/blog/${typeToggle}/${id}`,
      {},
      {
        headers: {
          Authorization: auth + localStorage.getItem("token"),
        },
      }
    );
    dispatch(toggling<PostAction>(result.data));
  } catch (error) {
    // console.log(error);

    return error;
  }
};
