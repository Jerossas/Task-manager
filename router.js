const route = (pathname, handle, res) => {
    console.log(`[Checking [${pathname}] request]`);

    if(pathname in handle){
        handle[pathname](res);
    } else {
        console.log(`[ERROR][The specified pathname does not exit]`);
        console.log(`[ERROR][[${pathname}] does not exist]\n`);
    }
}

exports.route = route;
