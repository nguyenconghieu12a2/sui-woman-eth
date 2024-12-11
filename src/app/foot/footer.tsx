'use client'

import head from '@/public/tokenomics/image.png'
import title from '@/public/foot/title.png'
import item3 from '@/public/foot/item3.png'
import item41 from '@/public/foot/item4-1.png'
import item42 from '@/public/foot/item4-2.png'
import item1 from '@/public/tokenomics/sui.png'
import logo from '@/public/hero/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='relative'>
      <Image className='relative w-full' src={head} alt='' width={1000} height={1000} />
      <Image className='px-5 pb-5 lg:mx-auto md:-top-32 lg:-top-48 relative z-10' src={title} alt='' width={1000} height={1000} />

      <div className='mx-5 items-center relative bg-gradient-to-b from-white rounded-xl border-4 border-black overflow-hidden md:-top-32 lg:-top-40 grid grid-cols-12 mb-10 max-w-[1300px] p-7 lg:mx-auto text-black'>
        <Image className='col-span-2 mx-auto lg:w-32 lg:h-40' src={item1} alt='' height={1000} />
        <div className='col-span-10 mx-10'>
          <div className='font-semibold text-4xl uppercase text-center'>
            Create a Sui Wallet
          </div>
          <div className='uppercase text-base md:text-xl lg:text-2xl font-base mt-2'>
            Download Sui Wallet or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app.
          </div>
        </div>
      </div>

      <div className='mx-5 items-center relative bg-gradient-to-b from-white rounded-xl border-4 border-black overflow-hidden md:-top-32 lg:-top-40 grid grid-cols-12 mb-10 max-w-[1300px] p-7 lg:mx-auto text-black'>
        <Image className='col-span-2 mx-auto lg:w-32 lg:h-40' src={item1} alt='' width={1000} height={1000} />
        <div className='col-span-10 mx-10'>
          <div className='font-semibold text-4xl uppercase text-center'>
            Create a Sui Wallet
          </div>
          <div className='uppercase text-base md:text-xl lg:text-2xl font-base mt-2'>
            Download Sui Wallet or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app.
          </div>
        </div>
      </div>

      <div className='mx-5 items-center relative bg-gradient-to-b from-white rounded-xl border-4 border-black overflow-hidden md:-top-32 lg:-top-40  grid grid-cols-12 mb-10 max-w-[1300px] p-7 lg:mx-auto text-black'>
        <Image className='col-span-2 mx-auto lg:w-40 lg:h-40' src={item3} alt='' width={1000} height={1000} />
        <div className='col-span-10 mx-10'>
          <div className='font-semibold text-4xl uppercase text-center'>
            Create a Sui Wallet
          </div>
          <div className='uppercase text-base md:text-xl lg:text-2xl font-base mt-2'>
            Download Sui Wallet or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app.
          </div>
        </div>
      </div>

      <div className='mx-5 items-center relative bg-gradient-to-b from-white rounded-xl border-4 border-black overflow-hidden md:-top-32 lg:-top-40 grid grid-cols-12 mb-10 max-w-[1300px] p-7 lg:mx-auto text-black'>
        <div className='col-span-2 mx-auto flex flex-col'>
          <Image className='w-60 h-16 lg:w-96 lg:h-32 mx-auto' src={item41} alt='' width={1000} height={1000} />
          <Image className='w-60 h-16 lg:w-96 lg:h-32 -mt-10 mx-auto' src={item42} alt='' width={1000} height={1000} />
        </div>
        <div className='col-span-10 mx-10'>
          <div className='font-semibold text-4xl uppercase text-center'>
            Create a Sui Wallet
          </div>
          <div className='uppercase text-base md:text-xl lg:text-2xl font-base mt-2'>
            Download Sui Wallet or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app.
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-5 md:gap-4 justify-center items-center pb-20'>
        <div className='pr-10 md:pr-0'>
          <Image className='w-36 h-36 object-cover scale-150 translate-x-10 translate-y-6 ml-20' src={logo} alt='logo' width={1000} height={1000} />
          <Image className='w-32 h-7 -mt-12  ml-20' src={title} alt='' width={1000} height={1000} />
        </div>
        <div className='text-customBlue uppercase lg:text-2xl xl:text-4xl font-bold font-sans'>
          SUI WOMEN © 2024. All rights reserved
        </div>

        <div className='flex flex-row gap-7'>
          <svg width="75" height="75" viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="75" height="75" rx="10" fill="#3193FE" />
            <path fillRule="evenodd" clipRule="evenodd" d="M34.222 17.0535C30.8655 18.7292 28.1194 20.1472 28.12 20.2049C28.1215 20.3537 36.1757 24.263 36.4615 24.2535C36.5916 24.2493 37.5349 23.8332 38.5577 23.3288L40.4177 22.4119L42.4491 23.4126L44.4803 24.4135L47.8069 22.9809C52.8193 20.8222 53.3399 20.5857 53.2583 20.5062C53.15 20.4008 51.3521 19.4751 46.4744 17.014C44.1171 15.8245 41.8291 14.6582 41.3899 14.4222C40.9507 14.1862 40.5314 13.9964 40.4582 14.0001C40.3849 14.0037 37.5785 15.3778 34.222 17.0535ZM19.5004 24.3597L16.0063 26.0895V33.681C16.0063 37.8563 16.0522 41.2724 16.1085 41.2724C16.1645 41.2724 17.8836 40.5582 19.9286 39.6853L23.6467 38.0982V30.0962L25.4636 31.0449C26.8636 31.7753 28.2646 32.5042 29.6663 33.2317L32.0521 34.4697L33.1137 34.0096C33.7796 33.7206 34.444 33.4288 35.1071 33.1341C35.6196 32.9054 36.8775 32.3624 37.9024 31.9272C38.9273 31.4919 39.876 31.0541 40.0105 30.9543C40.1892 30.8218 38.0101 29.6677 31.9505 26.6854C27.3829 24.4374 23.4993 22.6052 23.3202 22.614C23.1411 22.6228 21.4222 23.4083 19.5004 24.3597ZM53.888 24.8455C51.5083 25.8751 49.5596 26.7586 49.5574 26.809C49.5553 26.8593 50.8523 27.5985 52.4398 28.4513C54.0272 29.3042 55.326 30.0477 55.326 30.1037C55.326 30.1596 53.9213 30.8119 52.2047 31.5535C50.4878 32.295 46.1483 34.1733 42.5611 35.7274L30.5416 40.9345C27.5181 42.2444 24.7927 43.4251 24.4853 43.5586C18.3096 46.238 16.6121 46.9815 16.379 47.1091C16.1446 47.2376 16.0915 47.9841 16.0498 51.7306L16 56.1991L19.1246 57.7249L22.2491 59.2507L26.5817 57.3767C28.9647 56.3461 30.9143 55.4488 30.9143 55.3827C30.9143 55.3168 30.4739 55.0419 29.936 54.7714C29.3977 54.501 28.2867 53.9023 27.4668 53.4408C26.6469 52.9792 25.8294 52.5557 25.6499 52.4996C25.4705 52.4436 25.3262 52.3456 25.3292 52.2817C25.3322 52.218 27.24 51.3494 29.5686 50.3515C34.0915 48.4134 37.5528 46.9196 44.9836 43.699C48.3064 42.2592 51.6297 40.8202 54.9533 39.3821C57.8743 38.1185 61.2705 36.6427 62.5005 36.1026L64.7367 35.1205L64.7864 30.6012L64.8364 26.082L61.6673 24.523C59.9242 23.6657 58.4343 22.9663 58.3562 22.9689C58.2782 22.9712 56.2675 23.8156 53.888 24.8455ZM63.8876 41.1496C63.4206 41.3682 62.4982 41.7775 61.8378 42.0591C61.1774 42.3407 59.9242 42.8826 59.053 43.2636L57.469 43.956L57.4329 47.9236C57.4129 50.1058 57.3291 51.8815 57.2466 51.8699C57.0591 51.8432 54.0904 50.384 51.1062 48.8515C48.9523 47.7455 48.817 47.7015 48.3109 47.9418C48.0183 48.0807 46.2695 48.8324 44.4246 49.6125C42.5797 50.3925 41.0102 51.0816 40.9363 51.144C40.8627 51.2063 44.5757 53.1351 49.1877 55.4303L57.5729 59.6035L61.1549 57.8276C63.1248 56.851 64.7999 55.9602 64.877 55.8481C65.0506 55.5962 65.0358 40.7175 64.8619 40.7377C64.7932 40.7456 64.3546 40.931 63.8876 41.1496ZM44.0519 58.6134C43.4306 58.8694 42.8094 59.1258 42.1884 59.3825C40.3132 60.1601 40.6807 60.1859 38.4497 59.1214C36.9638 58.4125 36.3232 58.1938 36.0452 58.3C35.8367 58.3796 34.0419 59.1535 32.0566 60.0196C30.0714 60.8858 28.3782 61.5945 28.294 61.5945C27.4611 61.5945 28.8458 62.3874 34.1892 64.9707L40.4557 68L43.0924 66.7525C44.5426 66.0663 47.4675 64.6922 49.5924 63.6991C51.7172 62.7056 53.4294 61.8671 53.3973 61.8355C53.365 61.804 51.5847 60.9277 49.4408 59.8884L45.5427 57.9988L44.0519 58.6134Z" fill="white" />
          </svg>
          <svg width="75" height="75" viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="75" height="75" rx="10" fill="#3193FE" />
            <path fillRule="evenodd" clipRule="evenodd" d="M46.7128 32.2359C48.388 31.4122 50.5195 30.1997 52.6535 28.5385C53.1035 29.4599 53.1528 30.264 52.921 30.9132C52.7567 31.3708 52.4471 31.7688 52.04 32.0854C51.5992 32.4276 51.0487 32.6767 50.4401 32.8113C49.2853 33.0678 47.9371 32.9181 46.7128 32.2359ZM47.0032 40.6754L49.2207 41.9384C44.693 44.4408 43.4621 49.0873 42 53.613C40.538 49.0873 39.307 44.4408 34.7794 41.9384L36.9969 40.6754C37.2114 40.5954 37.3948 40.4506 37.5207 40.2616C37.6466 40.0726 37.7086 39.8491 37.6979 39.6233C37.4947 35.3848 38.6553 33.5105 40.2208 32.3336C40.7823 31.9121 41.3952 31.7004 42 31.7004C42.6047 31.7004 43.2177 31.9121 43.7794 32.3336C45.3448 33.5105 46.5054 35.3848 46.3023 39.6233C46.2915 39.8491 46.3535 40.0726 46.4794 40.2616C46.6053 40.4506 46.7887 40.5954 47.0032 40.6754ZM42 13C44.5632 13.0679 47.1328 13.5585 49.3629 14.5131C50.9072 15.1749 52.3482 16.0492 53.653 17.0946C54.2422 17.5666 54.7274 18.0225 55.2619 18.5474C56.7034 18.5966 58.8101 17.0174 59.7881 15.5398C58.1049 20.9812 50.424 27.407 45.1064 29.8658C45.1043 29.8649 45.1028 29.8637 45.1011 29.8626C44.1468 29.144 43.0735 28.7847 42 28.7847C40.9265 28.7847 39.8533 29.144 38.899 29.8626C38.8974 29.8635 38.8959 29.8651 38.8937 29.8658C33.576 27.407 25.8952 20.9812 24.212 15.5398C25.1899 17.0174 27.2966 18.5966 28.7381 18.5474C29.2728 18.0227 29.758 17.5666 30.347 17.0946C31.6518 16.0492 33.0928 15.1749 34.6371 14.5131C36.8673 13.5585 39.4369 13.0679 42 13ZM37.2872 32.2359C35.6122 31.4122 33.4805 30.1997 31.3466 28.5385C30.8966 29.4599 30.8474 30.264 31.079 30.9132C31.2435 31.3708 31.5531 31.7688 31.9599 32.0854C32.4009 32.4276 32.9515 32.6767 33.5601 32.8113C34.7148 33.0678 36.0629 32.9181 37.2872 32.2359Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M54.9908 26.5028C56.1656 25.3337 57.2008 24.0397 58.0332 22.885L58.456 23.6696C59.817 26.3547 60.5241 29.029 60.5241 32.0386L60.5212 36.8143L60.5468 39.29C60.6453 45.3679 61.979 51.5173 65 57.1448L58.6792 52.1188L54.2068 59.2754L49.5082 54.9139L42 66.9287L34.4918 54.914L29.7934 59.2756L25.321 52.119L19 57.145C22.021 51.5174 23.3547 45.3681 23.4534 39.2902L23.479 36.8145L23.4761 32.0387C23.4761 29.029 24.183 26.3547 25.5444 23.6698L25.967 22.8852C26.7994 24.0399 27.8344 25.3337 29.0094 26.503L28.6425 27.2545C27.9297 28.7141 27.6936 30.3462 28.2489 31.8983C28.6069 32.8981 29.2602 33.7554 30.1024 34.4099C30.9202 35.0455 31.888 35.4739 32.9013 35.6989C33.5614 35.8454 34.2338 35.9057 34.9019 35.8852C34.7461 36.7565 34.678 37.6603 34.6736 38.5812L28.7111 41.9771L33.3122 44.5203C33.68 44.7236 34.03 44.9565 34.3589 45.2167C38.1522 48.5752 40.4329 58.5106 42.0002 63.3636C43.5677 58.5106 45.8481 48.5752 49.6417 45.2167C49.9705 44.9565 50.3206 44.7236 50.6883 44.5203L55.2894 41.9771L49.3268 38.5812C49.3224 37.6603 49.2543 36.7565 49.0984 35.8852C49.7665 35.9057 50.439 35.8454 51.0991 35.6989C52.1123 35.4739 53.0803 35.0455 53.8979 34.4099C54.74 33.7554 55.3935 32.8981 55.7513 31.8983C56.3067 30.3462 56.0705 28.7143 55.3579 27.2545L54.991 26.503L54.9908 26.5028Z" fill="white" />
          </svg>
          <svg width="75" height="75" viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="75" height="75" rx="10" fill="#3193FE" />
            <path d="M54.5532 14H61.451L46.3059 33.096L64 59H50.1146L39.2433 43.2583L26.7974 59H19.8997L35.9444 38.5756L19 14H33.2302L43.052 28.3802L54.5532 14ZM52.139 54.5166H55.9627L31.221 18.3173H27.1123L52.139 54.5166Z" fill="white" />
          </svg>
          <svg width="75" height="75" viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="75" height="75" rx="10" fill="#3193FE" />
            <path d="M62.2257 17.4061C62.2257 17.4061 67.4062 15.4149 66.9744 20.2506C66.8305 22.2418 65.5355 29.2107 64.5281 36.7486L61.0746 59.0781C61.0746 59.0781 60.7868 62.3493 58.1965 62.9181C55.6062 63.4869 51.7211 60.9271 51.0015 60.3581C50.4258 59.9314 40.2091 53.5313 36.6114 50.4023C35.6042 49.5489 34.453 47.8423 36.7554 45.8511L51.8649 31.6286C53.5918 29.9219 55.3185 25.9397 48.1234 30.7752L27.9775 44.2867C27.9775 44.2867 25.6751 45.7089 21.3581 44.4289L12.0046 41.5844C12.0046 41.5844 8.55095 39.451 14.4509 37.3175C28.8409 30.6329 46.5407 23.8062 62.2257 17.4061Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  )
}