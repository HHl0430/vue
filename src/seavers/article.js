import request from '@/util/request'
export function getCanviwDataboat(data) {
    return request({
        url: '/v1/int/oversea/sea/contracts/tracks',
        method: 'POST',
        data
    })

}
export function general(data) {
    return request({
        url: 'web/account.youzan.com/settings/general',
        method: 'GET',
        params: data
    })

}