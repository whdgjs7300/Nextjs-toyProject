import Spinner from '../asset/spinner.gif'
import Image from 'next/image'

export default function LoadingSpinner() {
    
    return (
        <div>
            <Image
            src={Spinner}
            alt="Background Image"
            fill={true}
            priority={true}
            
                />
        </div>
    )
    
}