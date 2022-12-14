function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url}...`)
        callback(url)
    },100)
}

function process(picture) {
    console.log(`Processing ${picture}`)
}

let url = 1
download(url, process)