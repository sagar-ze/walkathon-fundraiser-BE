// import { factories } from "@strapi/strapi";

// export default factories.createCoreController(
//     "api::register.registerForEvent",
//     ({ strapi }) => ({
//         async registerForEvent(ctx) {
//             try {
//                 const data = await strapi
//                     .service("api::register.registerForEvent")
//                     .registerForEvent();
//                 console.log(data, "data");

//                 ctx.body = data;
//             } catch (err) {
//                 ctx.badRequest("Post report controller error", { moreDetails: err });
//             }
//         }
//     }))