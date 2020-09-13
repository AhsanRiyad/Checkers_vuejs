import axios from 'axios';
export default {
    data: () => {
        return {

        }
    },
    methods: {
        getIp(resolve, reject) {
            const headers = {
                Authorization: "Bearer " + this.$cookies.get("accessToken"),
                "Content-Type": "application/json",
                Accept: "application/json",
            };
            axios({
                method: "get",
                baseURL: this.$store.state.imageUrl,
                url: `api/get-ip`,
                headers,
            })
            .then((response) => {
                console.log("this is ip address....", response);
                this.$store.commit("userIp", response.data);
                resolve(response);
            })
            .catch((error) => {
                console.log(error);
                reject();
            })
            .finally(() => { });
        }
    }
}