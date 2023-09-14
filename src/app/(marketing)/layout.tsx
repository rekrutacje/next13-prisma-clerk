export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<header>{/* NAGIGATION */}</header>
			{children}
		</div>
	);
}
