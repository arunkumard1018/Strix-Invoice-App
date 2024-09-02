import { useState, useEffect } from 'react';

export default function IsScreenSmall(){
    const [isScreenSmall, setIsScreenSmall] = useState(false);

    useEffect(() => {
        // Function to check the screen size
        const checkScreenSize = () => {
            setIsScreenSmall(window.innerWidth < 768); // 768px is the md breakpoint
        };

        // Check the screen size on initial render
        checkScreenSize();

        // Add event listener to update on resize
        window.addEventListener('resize', checkScreenSize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isScreenSmall;
};

