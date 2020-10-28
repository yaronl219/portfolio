export const redirectService = {
    onRedirect
}

function onRedirect(target) {
    let redirect = ''
    
    switch (target) {
        case 'mail':
            redirect = 'mailto:lipshitzyaron@gmail.com'
            break;
        case 'facebook':
            redirect = 'https://www.facebook.com/yaron.lipshitz.1'
            break;
        case 'linkedin':
            redirect = 'https://www.linkedin.com/in/yaron-lipshitz-1855bb79/'
            break;
        case 'github':
            redirect = 'https://github.com/yaronl219'
            break;
        default:
            return console.log('unknown value')
            
    } 

    window.open(redirect)
}