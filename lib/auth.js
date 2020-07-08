import axios from 'axios'
import router from 'next/router';

axios.defaults.withCredentials = true;//passing over cookie data

export const loginUser = async (email, password) => {
    const {data} = await axios.post('/api/login', {email, password});
    if (typeof window !== "undefined") {
        window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
    }
}

const WINDOW_USER_SCRIPT_VARIABLE = '__USER__';

export const getUserScript = user => {
    return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
}

export const getServerSideToken = req => {
    const {signedCookies = {}} = req;

    if (!signedCookies) {
        return {};
    } else if (!signedCookies.token) {
        return {};
    }
    return {user: signedCookies.token};
};

export const getClientSideToken = () => {
    console.log('Client side token');
    if (typeof window !== "undefined") {
        const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};

        return {user};
    }//if in client

    return {user: {}}
}
//high order function
export const authInitialProps = isProtectedRoute => ({req, res}) => {
    const auth = req ? getServerSideToken(req) : getClientSideToken();
    const user = auth.user;
    const currentPath = req ? req.url : window.location.pathname;
    const isAnonymous = !user || user.type !== 'authenticated';


    if (isProtectedRoute && isAnonymous && currentPath !== "/login") {
        return redirectUser(res, "/login");
    }

    return {auth};
}

const redirectUser = (res, path) => {
    if (res) {
        res.redirect(302, path);//302 important for seo
        res.finished = true;
        return {};
    }

    Router.replace(path);
    return {};
}

export const logoutUser = async () => {
    if (typeof window !== "undefined") {
        const user = window[WINDOW_USER_SCRIPT_VARIABLE] = {};
    }

    await axios.post('/api/logout');
    router.push('/login');
}

export const getUserProfile = async () => {
    console.log('Geting  user profile');
    const {data} = await axios.get('/api/profile');

    return data;
}