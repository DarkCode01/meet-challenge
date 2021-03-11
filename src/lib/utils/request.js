/**
 * request - function to manage loadings
 *
 * @param {function} callback - request function
 * @param {object} options - functions to stop and start laoding
 */
export default async function request(
  callback,
  options = {
    startLoading: () => {},
    stopLoading: () => {},
  }
) {
  // init loading on start
  options.startLoading();

  // body of requets or callback action
  await callback();

  // finish or stop loading
  options.stopLoading();
}
