'use client'
import { usePathname, useRouter } from 'next/navigation';

export default  function CampBoard() {
    const router = useRouter(); 
    const pathname = usePathname();

    console.log(router,pathname)
    return (
        <div>
            
        
        </div>

    
    )
}