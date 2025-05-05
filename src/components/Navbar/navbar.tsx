'use client';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NavSidebar } from '@/components/NavSidebar/navSidebar';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['700'],
});
interface NavItemProps {
	children: React.ReactNode;
	href: string;
	isActive?: boolean;
}

const navItems: NavItemProps[] = [
	{ children: 'Home', href: '/' },
	{ children: 'Products', href: '/products' },
	{ children: 'About', href: '/about' },
	{ children: 'Pricing', href: '/pricing' },
	{ children: 'Contact', href: '/contact' },
];
export const NavItem = ({ href, children, isActive }: NavItemProps) => {
	return (
		<Button
			variant='outline'
			className={cn(
				'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg',
				isActive && 'bg-black text-white hover:bg-black hover:text-white'
			)}
		>
			<Link href={href}>{children}</Link>
		</Button>
	);
};
export const Navbar = () => {
	const pathName = usePathname();
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	return (
		<nav className='h-20 flex border-b items-center justify-between font-medium bg-white'>
			<Link href='/' className='text-2xl text-slate-900 ml-4'>
				<span className={cn('text-2xl md:text-5xl font-semibold', poppins.className)}>ZipCart</span>
			</Link>
			<NavSidebar items={navItems} open={isSidebarOpen} onOpenChange={setSidebarOpen} />

			<div className='items-center gap-4 hidden lg:flex'>
				{navItems.map((item) => (
					<NavItem key={item.href} {...item} isActive={pathName === item.href}>
						{item.children}
					</NavItem>
				))}
			</div>
			<div className='hidden lg:flex h-full'>
				<Button
					variant='secondary'
					asChild
					className='border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg'
				>
					<Link href='/sign-in'>Login</Link>
				</Button>
				<Button
					variant='secondary'
					asChild
					className='border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-white transition-colors text-lg'
				>
					<Link href='/sign-up'>Start Selling</Link>
				</Button>
			</div>
			<div className='flex lg:hidden item-center justify-center'>
				<Button
					variant='ghost'
					className='size-12 border-transparent bg-white'
					onClick={() => setSidebarOpen(true)}
				>
					<MenuIcon />
				</Button>
			</div>
		</nav>
	);
};
