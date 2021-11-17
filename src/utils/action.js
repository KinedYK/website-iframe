/**
 * 跳转软件详情页
 * @param {软件详情} id
 */
 export const gotoDetail = (id, router) => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === "production") {
    const { href } = router.resolve({
      name: "detail",
      params: {
        id: id,
      },
    });
    window.open(href, "_blank");
  } else {
    router.push({
      name: "detail",
      params: {
        id: id,
      },
    });
  }
};

/**
 * 
 */
export const gotoHref = (href) => {
  updataHref(href)
  window.open(href, "_blank");
}

/**
 * 跳转搜索
 */
 export const gotoSearch = (text, url, ) => {
  console.log(encodeURIComponent(text), text, url)
  const href  = url.replace(/([&|?]{1}.+=)key/,`$1${encodeURIComponent(text)}`)
  updataHref(href)
  window.open(href, "_blank");
};

/**
 * 上传数据
 */
 export const updataHref = (href) => {
  const encodedData = window.encode(window.encodeUtf8(href));
  window.axios.get(`/api/base/visit/${encodedData}.html`).then((res) => {
    console.log(href)
  });
}
