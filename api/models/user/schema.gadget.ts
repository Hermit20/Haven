import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://haven.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "T90x_iKaBsxM",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "qYSx8pJkDst7",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "k0WK-PyY3im6",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "FfuBUhSHjP-A",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "ZixZqKGuqjYT",
    },
    firstName: { type: "string", storageKey: "cMIoYf74EW_k" },
    googleImageUrl: { type: "url", storageKey: "sUiu-xQIa4zv" },
    googleProfileId: { type: "string", storageKey: "miKdhXKbf7oF" },
    lastName: { type: "string", storageKey: "V0laNJVq2Hcc" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "XEVpHXg1ZkRR",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "tfp-30erIkO9",
    },
    profilePicture: {
      type: "file",
      allowPublicAccess: true,
      storageKey: "r7mpgDOtk4v_",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "v4QCpYUGPCZm",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "ppY7faLAwQgD",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "TFo_mZzA6l66",
    },
  },
};
