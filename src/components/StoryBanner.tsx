import Image from 'next/image';
import styles from '../CSS/Home.module.css';
import Link from 'next/link';

export default function StoryBanner() {

return (
    <div className={styles.story_container}>
        <h1>캠핑 <span>Story</span></h1> 
        <p>캠핑가기전 정보와 소식을 확인하세요 ! </p>


        <div className={styles.story_imgbox}>
            
            <Link target='blank' href='https://its.go.kr/'>
            <img 
            src='/carbanner.png' 
            alt='교통배너'
            width={250}
            height={250} />
            </Link>
            <Link target='blank' href='https://m.blog.naver.com/ksea1004/222748533135'>
            <img 
            src='/safetybanner.jpeg' 
            alt='안전배너'
            width={250}
            height={250} />
            </Link>
            <Link target='blank' href='https://yesscamp.co.kr/camping'>
            <img 
            src='/thingbanner.jpeg' 
            alt='용품배너'
            width={250}
            height={250} />
            </Link>
            <Link target='blank' href='https://www.weather.go.kr/w/index.do'>
            <img 
            src='/weatherbanner.png' 
            alt='날씨배너'
            width={250}
            height={250} />
            </Link>
        </div>
        
    </div>
)
}
