import logo from '../../assets/logo.svg';
import Button from "../common/Button.jsx";

export default function Header(){

    const navigation = [
            { name: 'Home', href: '#', current: true },
            { name: 'Company', href: '#', current: false },
            { name: 'Marketplace', href: '#', current: false },
            { name: 'Features', href: '#', current: false },
            { name: 'Team', href: '#', current: false },
            { name: 'Contact', href: '#', current: false },
        ];


    return (
        <header className="fixed w-full">
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="#" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-9"
                             alt="Landwind Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Learn with
                        Sumit</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <Button Text="Download"/>

                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}
                                       className={`block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${item.current ? 'text-purple-700 dark:text-white' : 'text-gray-900 dark:text-gray-400'}`}
                                       aria-current={item.current ? 'page' : undefined}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );

}