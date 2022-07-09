let store = [];

function initStore() {
  for (let index = 0; index < 200; index++) {
    store.push({
      resId: index,
      name: `个人收藏${index}.mp4`,
      type: Math.round(Math.random() * 6) - 2,
      path: '个人资产 > 我的文件 > 文件夹1',
      addTime: '2022-06-12 10:55:16'
    });
  }
}

initStore();

exports.getMyFavoriteFileListAsync = ctx => {
  const { page, pageSize } = ctx.request.body;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = store.slice(startIndex, endIndex);
  ctx.body = {
    code: 200,
    message: '成功',
    data
  };
};

exports.removeMyFavoriteFileAsync = ctx => {
  const { resIds } = ctx.request.body;
  store = store.filter(x=>!resIds.some(o=>o === x.resId));
  const data = [];
  ctx.body = {
    code: 200,
    message: '成功',
    data
  };
};

exports.addMyFavoriteFileAsync = ctx => {
  const data = [];
  ctx.body = {
    code: 200,
    message: '成功',
    data
  };
};
