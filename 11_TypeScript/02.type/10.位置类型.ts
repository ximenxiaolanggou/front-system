let username = "aa"

username = "bbb"

// 请求参数设置指定
function showFunA(env: 'Test' | 'Dev' | 'Pro') {

}

showFunA('Test')

// 返回值设置指定
function showFunB(): 'Test' | 'Dev' | 'Pro' {
    return 'Test'
}

function showFunC(type: 'POST' | 'GET' ) {

}

let type = {
    type: 'GET'
} as const 

showFunC(type.type)