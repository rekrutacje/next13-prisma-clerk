export default function ApplicationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<aside>{/* NAGIGATION */}</aside>
			<main>{children}</main>
		</div>
	);
}
