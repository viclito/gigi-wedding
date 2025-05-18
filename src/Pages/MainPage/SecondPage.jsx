import bride from '../../assets/pre/bride.webp'
import groom from '../../assets/pre/groom.webp'

const SecondPage = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-4">
      <h1
        className="text-2xl md:text-3xl lg:text-5xl m-4 font-medium text-center"
        style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
      >
        About Bride
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4">
        <div className="grid grid-cols-[0.25fr_repeat(2,_1fr)] grid-rows-[repeat(5,_1fr)] gap-0 md:w-[50%]  h-[60vh]">
          <div className="col-start-1 col-end-3 row-start-1 row-end-5 bg-gray-200 rounded-lg">
            <img
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg"
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-start-2 col-end-4 row-start-2 row-end-6 bg-white p-1 rounded-lg ">
            <img
              src={bride}
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-[50%]">
          <h5 className='text-justify'>
            She is clothed with strength and dignity, and she laughs without fear of the future. A woman of virtue and grace, her heart reflects the love of Christ. Blessed is the man who finds her, for she is more precious than rubies.
          </h5>
        </div>
      </div>





      <h1
        className="text-2xl md:text-3xl lg:text-5xl m-4 font-medium text-center mt-10"
        style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
      >
        About Groom
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-4">
        
        <div className="md:w-[50%]">
          <h5 className='text-justify'>
            A man of wisdom and integrity, he walks in humility and leads with love. Rooted in faith, he is a reflection of Christ’s steadfastness — strong, gentle, and full of grace. Blessed is the one who walks in the ways of the Lord.
          </h5>
        </div>

        <div className="grid grid-cols-[0.25fr_repeat(2,_1fr)] grid-rows-[repeat(5,_1fr)] gap-0 md:w-[50%]  h-[60vh]">
          <div className="col-start-1 col-end-3 row-start-1 row-end-5 bg-gray-200 rounded-lg">
            <img
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg"
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-start-2 col-end-4 row-start-2 row-end-6 bg-white p-1 rounded-lg ">
            <img
              src={groom}
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default SecondPage;
