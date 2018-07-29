// actions types
export const SHOW_MESSAGE_FOR_EXAMPLE = 'SHOW_MESSAGE_FOR_EXAMPLE';

export function showMessage(message) {
  return {
    type: SHOW_MESSAGE_FOR_EXAMPLE,
    payload: { message },
  };
}
