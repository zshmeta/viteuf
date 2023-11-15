// This file exports utility functions that are used throughout the application

// A utility function to handle async errors
function catchAsyncErrors(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
}

// A utility function to send responses
function sendResponse(res, statusCode, data) {
  res.status(statusCode).json({
    status: 'success',
    data,
  });
}

module.exports = {
  catchAsyncErrors,
  sendResponse,
};