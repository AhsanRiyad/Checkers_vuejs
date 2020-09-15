import axios from 'axios';
export default {
    methods: {
        refreshToken(resolve, reject) {
            const headers = {
                Authorization: "Bearer " + this.$cookies.get("accessToken"),
                "Content-Type": "application/json",
                Accept: "application/json",
            };
            axios({
                method: "get",
                baseURL: this.$store.state.apiBase,
                url: `users/new-access-token`,
                params: {
                    access_token: this.$cookies.get("accessToken"),
                    ip: this.$store.getters.userIp
                },
                headers,
            })
                .then((response) => {
                    console.log("this is refresh token.....", response);
                    this.$cookies.set("accessToken", response.data.access_token);
                    resolve(response);
                })
                .catch((error) => {
                    this.$cookies.set("accessToken", "");
                    console.log(error);
                    reject();
                })
                .finally(() => { });
        }
    }
}