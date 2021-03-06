import createToast from "../factories/createToast";

export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: "ADD_TOAST"
  };
}

export function removeToast(id) {
  return {
    payload: id,
    type: "REMOVE_TOAST"
  };
}
