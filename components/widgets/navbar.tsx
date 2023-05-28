import { ThemeToggle } from "../theme-toggle";

const NavBar = () => {
    return (
        <nav className='sticky right-0 top-0 z-50 h-full w-full'>
            <div className='absolute right-0 z-40 flex w-72 gap-3 rounded-b-3xl bg-primary p-6 text-center'>
                <p>==</p>
                <h1 className='w-full font-bold text-secondary'>Guilad | Web Developer</h1>
            </div>
            <div className='absolute right-0 flex h-36 w-20 items-end justify-center rounded-3xl bg-accent p-4'>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default NavBar;