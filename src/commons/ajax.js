import a from 'axios';

const axios = a.create()

axios.defaults.baseURL = '/worker-space/';
// axios.defaults.baseURL = process.env.NODE_ENV;m

export const $get = (url, data) => {
    return new Promise((resolve, reject) => {
        if (~url.indexOf('http'))
            axios.baseURL = '';
        axios.get(url, {params: data})
            .then(r => r.data && r.data.success ? resolve(r.data.data || r.data.aData || r.data.rows || r.data.aaData || r.data.info) : reject(r.data))
            .catch(e => reject(e))
    })
};

export const $post = (url, data, conf) =>
    new Promise((resolve, reject) => {
        if (conf) {
            conf.headers = {'Content-Type': 'application/json;charset=utf8'}
        } else {
            conf = {headers: {'Content-Type': 'application/json;charset=utf8'}}
        }
        axios.post(url, JSON.stringify(data), conf)
            .then(r => r.data && r.data.success ? resolve(r.data.data || r.data.aData || r.data.rows || r.data.aaData || r.data.info) : reject(r.data))
            .catch(e => reject(e))
    });

export const $put = (url, data, conf) =>
    new Promise((resolve, reject) => {
        if (conf) {
            conf.headers = {'Content-Type': 'application/json;charset=utf8'}
        } else {
            conf = {
                headers: {
                    'Content-Type': 'application/json;charset=utf8'
                }
            }
        }
        axios.put(url, JSON.stringify(data), conf)
            .then(r => r.data && r.data.success ? resolve(r.data.data || r.data.aData || r.data.rows || r.data.aaData || r.data.info) : reject(r.data))
            .catch(e => reject(e))
    })

export const $delete = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.delete(url, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json;charset=utf8'
            }
        })
            .then(r => r.data && r.data.success ? resolve(r.data.data || r.data.aData || r.data.rows || r.data.aaData || r.data.info) : reject(r.data))
            .catch(e => reject(e))
    })
};
