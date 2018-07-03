const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

function transformUnit(traffic) {
  if (traffic < 1024) {
    return {
      val: traffic,
      unit: 'bps'
    };
  } else if (traffic >= 1024 && traffic < 1024 * 1024) {
    return {
      val: (traffic / 1024).toFixed(2),
      unit: 'Kbps'
    };
  } else if (traffic >= 1024 * 1024 && traffic < 1024 * 1024 * 1024) {
    return {
      val: (traffic / 1024 / 1024).toFixed(2),
      unit: 'Mbps'
    };
  } else if (traffic >= 1024 * 1024 * 1024 && traffic < 1024 * 1024 * 1024 * 1024) {
    return {
      val: (traffic / 1024 / 1024 / 1024).toFixed(2),
      unit: 'Gbps'
    };
  } else {
    return {
      val: (traffic / 1024 / 1024 / 1024 / 1024).toFixed(2),
      unit: 'Tbps'
    };
  }
}
/**
 * 获得指定长度的随机字符串
 */
function getRandomStr(len) {
  return Math.random().toString(36).substr(2, 2 + len);
}

module.exports = {
  formatTime: formatTime,
  transformUnit: transformUnit,
  getRandomStr: getRandomStr
}