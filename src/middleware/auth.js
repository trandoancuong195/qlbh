export default function authenticate(){
    useEffect(() => {
        // fakeDataUser()
        const url = href.getUrlUserInfo()
        getData(url)
            .then(res => {
                console.log(res)
                if (res && res.data && res.data.user_id) {
                    dispatch({type: 'SET_USER', payload: res.data})
                    dispatch({type: 'SET_LOGIN'})
                    // UposLogFunc("Login Success" + JSON.stringify(res.data));
                }
                changeIsLoading(false)
                // cns;
            })
            .catch(err => {
                UposLogFunc(
                    `${'LOGIN ERROR: check AuthenticationRouter in NavBar, error: '}${
                        err.message
                    }`,
                )
                dispatch({type: 'SET_USER', payload: {}})
                dispatch({type: 'SET_LOGOUT'})
                changeIsLoading(false)
            })
    }, [])
}