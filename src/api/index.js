/*
包含 n 个接口请求函数的模块
每个函数返回 promise

ajax中的参数名称要根据api文档
*/
import ajax from "./ajax";


const BASE = 'https://www.yiwifi1.com:8088'

export const reqEnterprise = (id) => ajax(BASE + '/supervision/enterprise/getQrcodeById',{id});

export const reqVideo = (id) => ajax(BASE + '/video/selectByEnterpriseId', {id});