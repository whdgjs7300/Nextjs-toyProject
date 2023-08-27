'use client'
import { usePathname, useRouter,useSearchParams} from 'next/navigation';

export default  function CampBoard() {
    const locationData = sessionStorage.getItem('location');

    // locationData 값이 있는 경우에만 파싱하여 lat와 lon 값을 가져오기
    let lat = null;
    let lon = null;
    if (locationData) {
        const { lat: storedLat, lon: storedLon } = JSON.parse(locationData);
        lat = storedLat;
        lon = storedLon;
    }

    console.log('Lat:', lat);
    console.log('Lon:', lon);

    

    return (
        <div>
            
        
        </div>

    
    )
}