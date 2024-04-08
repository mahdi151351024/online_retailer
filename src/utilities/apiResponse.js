export const apiSuccess = (message, data = null, statusCode = 200) => ({
    status: true,
    message: message,
    data: data,
    status_code: statusCode

});

export const apiFailed = (message, data = null, statusCode = 500) => ({
  status: false,
  message: message,
  data: data,
  status_code: statusCode,
});

export default {};
