import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/forgot-password": {};
  "/reset-password": {};
  "/sign-in": {};
  "/sign-up": {};
  "/signed-in": {};
  "/profile": {};
  "/invite": {};
  "/team": {};
};