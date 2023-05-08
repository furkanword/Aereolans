const opc = {
        "GET": () => getDataAll(),
        "PUT": (data) => putData(data),
        "DELETE": (data) => deleteData(data),
        "SEARCH": (data) => searchData(data),
        "POST": (data) => postData(data)
    }

    let config = {
        headers:new Headers ({
            "contet-Type":"application/json"
        }),
    }

    const getDataAll = async() => {
        config.method = "GET";
        let res = await (await fetch(""))
    }
