
export default {
  // 一些常用变量
  is_dev: process.env.NODE_ENV === 'development',
  is_mobile: (/(iPhone|iPod|iPad|Android|ios)/i).test(navigator.userAgent),

  // 用户
  my_info: null
}
