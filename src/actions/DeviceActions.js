// actions types
export const actionsTypes = {
  DEVICE_GET_DEVICE: 'DEVICE_GET_DEVICE',
  DEVICE_CHANGE_DEVICE: 'DEVICE_CHANGE_DEVICE',
};

export const changeDevice = obj => ({
  type: actionsTypes.DEVICE_CHANGE_DEVICE,
  payload: obj,
});

export const getIinitialDevice = getDevice => ({
  type: actionsTypes.DEVICE_GET_DEVICE,
  payload: getDevice(),
});
