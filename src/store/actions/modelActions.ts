import { AnyAction } from "redux";
import lotusApi from "../../api";
import {
  adding,
  fetching,
  editing,
  deleting,
  selecting,
} from "./dispatchTypes";
import { ThunkDispatch } from "redux-thunk";
import { dataTypes, data } from "../types";
export const addData = <T>(
  data: data,
  url: string,
  dataTypes: dataTypes
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const response = await lotusApi.post(`/${url}`, data);
    // dispatch(registering(response.data));

    dispatch(adding<T>(response.data, dataTypes));
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const fetchCollection = <T>(url: string, dataTypes: dataTypes) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    const response = await lotusApi.get(`/${url}`);
    // dispatch(registering(response.data));
    dispatch(fetching<T>(response.data, dataTypes));
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const updateData = <T>(
  data: data,
  url: string,
  dataTypes: dataTypes
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const response = await lotusApi.put(`/${url}`, data);
    // dispatch(registering(response.data));
    dispatch(editing<T>(response.data, dataTypes));
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const deleteData = <T>(
  data: data,
  url: string,
  dataTypes: dataTypes
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    const response = await lotusApi.delete(`/${url}`, data);
    // dispatch(registering(response.data));
    dispatch(deleting<T>(response.data, dataTypes));
  } catch (error) {
    console.log(error);

    return error;
  }
};
export const selectData = <T>(url: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    const response = await lotusApi.get(`/${url}`);
    // dispatch(registering(response.data));
    dispatch(selecting<T>(response.data));
  } catch (error) {
    console.log(error);

    return error;
  }
};
