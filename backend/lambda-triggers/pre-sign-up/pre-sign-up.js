"use strict";

exports.handler = async (event) => {
    console.log(event);
    event.response.autoConfirmUser = true;
    event.response.autoVerifyPhone = true;
    return event;
};
