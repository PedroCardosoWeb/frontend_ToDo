module.exports = {
  async redirects(){
    return[
      {
        source: '/',
        destination: 'http://localhost:4000',
        permanent: false,
        basePath: false
      },
      {
        source: '/:path*',
        destination: 'http://localhost:4000/:path*',
        permanent: false
      }
    ]
  }
}

