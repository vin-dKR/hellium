import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import RadialBlur from '../ui/RadialBlur';

const Footer = () => {
    return (
        <footer className="relative border-t border-t-black dark:border-t-white mt-36">
            <div className="absolute inset-0 -z-10">
                <RadialBlur
                    color="#FF8800"
                    size="400px"
                    blur="150px"
                    position={{ bottom: '0', right: '25%' }}
                />
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-900 to-slate-400">
                            Your Brand
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Building the future of web applications with modern solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-sm text-gray-600 hover:text-dark-org dark:text-gray-400 dark:hover:text-fade-org transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {['Documentation', 'Blog', 'Support', 'Terms'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-sm text-gray-600 hover:text-dark-org dark:text-gray-400 dark:hover:text-fade-org transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            {[
                                { icon: Github, href: 'https://github.com' },
                                { icon: Twitter, href: 'https://twitter.com' },
                                { icon: Linkedin, href: 'https://linkedin.com' }
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="p-2 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className="w-5 h-5 text-gray-600 hover:text-dark-org dark:text-gray-400 dark:hover:text-fade-org" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Your Brand. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link
                                href="/privacy"
                                className="text-sm text-gray-600 hover:text-dark-org dark:text-gray-400 dark:hover:text-fade-org"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-gray-600 hover:text-dark-org dark:text-gray-400 dark:hover:text-fade-org"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;