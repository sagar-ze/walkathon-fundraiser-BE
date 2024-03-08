module.exports = {

    async customUser(ctx, next) {
        try {
            const data = await strapi
                .service("api::custom-user.custom-user")
                .customUser(ctx);
            console.log(data, "data");
            ctx.body = data;
            //const sanitizedUser = await sanitizeUser(user, ctx);
        } catch (err) {
            ctx.badRequest("Post report controller error", { moreDetails: err });
        }
    },
};