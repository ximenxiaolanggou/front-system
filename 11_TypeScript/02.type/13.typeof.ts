function showAll(strs: string | string[] | null) {
    if(typeof strs === 'object') {
        for (const s of strs) {
            console.log(s)
        }

    }else if(typeof strs === 'string') {

    }else {

    }
}