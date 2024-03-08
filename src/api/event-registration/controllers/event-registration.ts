/**
 * event-registration controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::event-registration.event-registration');

// export default factories.createCoreController(
//     'api::event-registration.event-registration',
//     ({ strapi }) => ({

//         async create(ctx) {
//             try {
//                 await this.validateQuery(ctx);

//                 const sanitizedQueryParams = await this.sanitizeQuery(ctx);

//                 const newParticipant = await strapi.entityService.create('api::participant.participant', {

//                     populate: '*',
//                     data: {
//                         FirstName: ctx.request.body.firstName,
//                         LastName: ctx.request.body.lastName,
//                         Email: ctx.request.body.email,
//                         ContactNumber: ctx.request.body.ContactNumber,
//                         isRegistered: true,
//                     }

//                 })
//                 const newDonor = await strapi.db.query("api::donor.donor").createMany({
//                     data: ctx.request.body.donors
//                 });
//                 // const newDonor = await strapi.entityService.create('api::donor.donor', {
//                 //     populate: '*',
//                 // })
//                 // sanitizeOutput removes any data that was returned by our query that the ctx.user should not have access to
//                 const sanitizedResults = await this.sanitizeOutput(newParticipant, ctx);
//                 // transformResponse correctly formats the data and meta fields of your results to return to the API
//                 return this.transformResponse(sanitizedResults, {});
//             } catch (error) {

//             }


//         }
//     }))
