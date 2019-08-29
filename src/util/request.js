import axios from 'axios'
import { Message, Loading } from 'element-ui'
import Vue from 'vue'
// import router from '@/router'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 30000, // request timeout
})
let loadingInstance;
// request interceptor
service.interceptors.request.use(config => {
    // Do something before request is sent
    if (!((config.data && config.data.loading === false) || (config.params && config.params.loading === false))) {
        loadingInstance = Loading.service({
            lock: true,
            text: '加载中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)',
            fullscreen: true
        })
    }
    return config
}, error => {
    loadingInstance.close()
    Promise.reject(error)
})
function pageScrollLeft(res) {
    if (res.data && res.data.list && res.data.total) {
        $('.el-table__body-wrapper').scrollLeft(0)
    }
}
service.interceptors.response.use(
    response => {
        if (response.status == 200) {
            pageScrollLeft(response.data)
        }
        Vue.nextTick(function () {
            if (loadingInstance) {
                loadingInstance.close()
                loadingInstance = null
            }
        })
        return response

    },
    error => {
        Vue.nextTick(function () {
            if (loadingInstance) {
                loadingInstance.close()
                loadingInstance = null
            }
        })
        if (error.message.indexOf('401') >= 0) {
         
        } else {
            Message({
                message: '网络错误',
                type: 'error',
                duration: 3 * 1000
            })
        }


        return Promise.reject(error)
    })
    export default service