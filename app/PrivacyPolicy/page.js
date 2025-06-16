'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { IoChevronBackSharp } from 'react-icons/io5';
const PrivacyPolicy = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back(); // Navigates to the previous page
    };

    return (
        <div className='max-w-md mx-auto shadow-xl min-h-screen'>
            <nav className='bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-white'>
                <div className='flex justify-between items-center py-3 px-2 w-2/3'>
                    <IoChevronBackSharp className='text-3xl cursor-pointer' onClick={handleBack} />
                    <h1 className='font-extrabold'>Privacy Policy</h1>
                </div>
            </nav>
            <main className="p-5 space-y-4 text-gray-800">
                <p>
                    This Privacy Policy describes our policies and procedures regarding the
                    collection, use, and disclosure of your information when you use the
                    service. It also informs you about your privacy rights and how the law
                    protects you.
                </p>

                <h1 className="text-xl font-bold mt-6">Interpretation and Definitions</h1>

                <h2 className="text-lg font-semibold">Interpretation</h2>
                <p>
                    Words with the initial letter capitalized have meanings defined under the
                    following conditions. These definitions apply regardless of whether they
                    appear in singular or plural form.
                </p>

                <h2 className="text-lg font-semibold">Definitions</h2>
                <p>For the purposes of this Privacy Policy:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <strong>You</strong> means the individual accessing or using the Service,
                        or the company or other legal entity on behalf of which such individual is
                        accessing or using the Service, as applicable.
                    </li>
                    <li>
                        <strong>Company</strong> (referred to as either "the Company", "We",
                        "Us", or "Our" in this Agreement) refers to <strong>{'{1}'}</strong>.
                    </li>
                    <li>
                        <strong>Affiliate</strong> means an entity that controls, is controlled
                        by, or is under common control with a party, where "control" means
                        ownership of 50% or more of the shares, equity interest, or other
                        securities entitled to vote for election of directors or other managing
                        authority.
                    </li>
                    <li>
                        <strong>Account</strong> means a unique account created for you to access
                        our Service or parts of our Service.
                    </li>
                    <li>
                        <strong>Website</strong> refers to <strong>{'{2}'}</strong>, accessible
                        from <strong>{'{0}'}</strong>.
                    </li>
                    <li>
                        <strong>Service</strong> refers to the Website.
                    </li>
                </ul>

                <p>
                    You are advised to review this Privacy Policy periodically for any changes.
                    Changes to this Privacy Policy are effective when they are posted on this
                    page.
                </p>

                <h1 className="text-xl font-bold mt-6">Contact Us</h1>
                <p>If you have any questions about this Privacy Policy, you can contact us:</p>
                <p>
                    By visiting this page on our website:{' '}
                    <strong>{'{0}'}</strong>
                </p>
            </main>


        </div>
    )
}

export default PrivacyPolicy