module.exports = {
    customUser: async (data) => {
        try {
            // create a new User(Donor or Participant) depending on the Role ID provided through the API
            const entries = await strapi.entityService.create(
                "plugin::users-permissions.user", {
                data: {
                    username: data.request.body.username,
                    email: data.request.body.email,
                    password: data.request.body.password,
                    blocked: false,
                    provider: 'local',
                    role: data.request.body.role,
                    firstName: data.request.body.firstName,
                    lastName: data.request.body.lastName,
                    contactNumber: data.request.body.contactNumber,
                    address: data.request.body.address,
                    resetPasswordToken: null,
                    confirmationToken: null,
                    confirmed: true,
                },
            },
            );

        } catch (err) {
            return err;
        }
    },
};