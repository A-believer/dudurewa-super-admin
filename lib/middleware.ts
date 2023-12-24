export { default } from "next-auth/middleware"


export const config = { matcher: ["/admin", "/admin/dashboard", "/admin/orders", "/admin/history", "/admin/inventory"] }