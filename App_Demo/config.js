// 全局配置
var PM_HOST = ''
var PM_API = {
  PROJECT_GROUP: '/pmweb/api/project_group',
  PROJECT_LINK: '/pmweb/api/projectlink',
  IDC_EQUIPMENT: '/pmweb/api/idc/equipment'
}

function getPmHost() {
  return PM_HOST;
}

function getPmApiList() {
  return PM_API;
}
module.exports = {
    /** 腾讯地图 **/
    map: {
        baseUrl: 'https://apis.map.qq.com/ws',
        key: '2TCBZ-IM7K5-XHCIZ-QXLRT-CIT4J-DEFSM',
    },

    /** 输入框控件设置 **/
    input: {
        charWidth: 14,  // 单个字符的宽度，in rpx
    },

    /** 本地存储 **/
    // TODO 数据通过API全部存储于服务端
    storage: {
        diaryListKey: 'bearDiaryList',
    },
    getPmHost: getPmHost,
    getPmApiList: getPmApiList
};
