const redis = require('redis')

class Redis {
  constructor (redis) {
    this._redis = redis

    this.client = null
  }

  init (options = {}) {
    const client = this.client = this._redis.createClient(options.port, options.host)
    if (!!options.auth) client.auth(options.auth)
    return new Promise((resolve, reject) => {
      client.on('connect', () => resolve(this))
      client.on('error', reject)
    })
  }

  set (key, val, expire) {
    return new Promise((resolve, reject) => {
      this.client.set(key, val, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
      if (!!expire) {
        this.client.expire(key, expire)
      }
    })
  }

  get (key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
    })
  }

  del (key) {
    return new Promise((resolve, reject) => {
      this.client.del(key, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
    })
  }

  hmset (key, sub, val, expire) {
    return new Promise((resolve, reject) => {
      this.client.hmset(key, sub, val, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
      if (!!expire) {
        this.client.expire(obj, expire)
      }
    })
  }

  hget (key, sub) {
    return new Promise((resolve, reject) => {
      this.client.hget(key, sub, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
    })
  }

  hdel (key, sub) {
    return new Promise((resolve, reject) => {
      this.client.hdel(key, sub, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
    })
  }
}

module.exports = async (options) => {
  const redisClient = new Redis(redis)

  const client = await redisClient.init(options)

  return client
}
