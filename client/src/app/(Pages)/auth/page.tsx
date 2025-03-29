"use client"
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import React, { useState } from 'react';

const Page: React.FC = () => {
    const [isRegister, setIsRegister] = useState<boolean>(false);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            {isRegister && (
                <RegisterForm setIsRegister={setIsRegister} />
            )}
            {!isRegister && (
                <LoginForm setIsRegister={setIsRegister} />
            )}

        </div>
    );
};

export default Page;