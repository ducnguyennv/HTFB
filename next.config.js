module.exports = {
  async rewrites() {
    return [
      {
        source: '/google[một_chuỗi_ký_tự].html',
        destination: '/google[một_chuỗi_ký_tự].html',
      },
    ]
  },
}