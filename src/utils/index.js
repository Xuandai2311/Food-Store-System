/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */

/**
 * @param {string} url
 * @returns {Object}
 */

export function formatCurrency(money) {
  if (!money) {
    return 0;
  }
  return money.toFixed(0).replace(/./g, function (c, i, a) {
    return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
  });
}

export function getImgIconWebSvg(icon) {
  let images = require.context("@/assets/images/Web/icon/web", false, /\.svg$/);
  return images("./" + icon + ".svg");
}

export function formatPrice(value) {
  const val = (value / 1).toFixed(0).replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatMinutes(minutes) {
  const days = Math.floor(minutes / (24 * 60));
  const hours = Math.floor(minutes / 60);
  const remainMinutes = minutes % 60;

  if (days > 0) return days + " ngày";
  if (hours > 0) return hours + " giờ " + remainMinutes + " phút";
  return remainMinutes + " phút";
}
