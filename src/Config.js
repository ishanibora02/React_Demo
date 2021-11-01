export const config = {
  auth: {
    clientId: "538c66c5-3b59-4d43-bd4e-4524331189a1",
    redirectUri: "http://localhost:3000",
    scopes: ["user.read"],
    authority:
      "https://login.microsoftonline.com/e4e34038-ea1f-4882-b6e8-ccd776459ca0",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};

export const graphConfig = {
  graphMeEndpoint: "http://127.0.0.1:8000/MsSso/",
};
