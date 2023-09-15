import { authMiddleware } from "@clerk/nextjs";

const publicRoutes = ["/", "/blog", "/api/webhooks/user"];

// eslint-disable-next-line import/no-default-export
export default authMiddleware({
	// wyjątki nie wymagające logowania
	publicRoutes,
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
