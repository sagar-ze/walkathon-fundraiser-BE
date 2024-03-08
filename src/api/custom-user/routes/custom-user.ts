module.exports = {
    routes: [
        {
            method: "POST",
            path: "/custom-user",
            handler: "custom-user.customUser",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};