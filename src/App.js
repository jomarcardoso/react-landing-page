import './App.css';
import sharpnessImg from './img/sharpness.png';
import adaptativeContrastImg from './img/adaptative-contrast.png';
import saturationImg from './img/saturation.jfif';
import whiteBalanceImg from './img/white-balance.webp';
import contrastImg from './img/contrast.png';

function App() {
  return (
    <div>
      <div className="py-6 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-md px-4 mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">
            TV calibration
          </h1>

          <p className="mb-6 text-justify">
            The standard settings that comes to the television is to impress the
            customers in store. Other settings are to very bright environments.
          </p>
        </div>
      </div>

      <section aria-labelledby="modifies" className="py-6">
        <div className="max-w-md px-4 mx-auto">
          <h2 id="modifies" className="font-serif text-4xl mb-4">
            Modifies
          </h2>

          <p className="mb-4 text-justify">
            Disable any setting that modify the original image.
          </p>

          <img
            src={adaptativeContrastImg}
            alt=""
            className="w-100 max-w-md m-auto mb-4 border-4 border-black"
          />

          <div class="flex justify-between font-mono p-3 border-4 border-black border-b-0">
            <div>ADAPTATIVE CONTRAST</div>
            <div>OFF</div>
          </div>
          <div class="flex justify-between font-mono p-3 border-4 border-black border-b-0">
            <div>MOTION INTERPOLATION</div>
            <div>OFF</div>
          </div>
          <div class="flex justify-between font-mono p-3 border-4 border-black border-b-0">
            <div>JUDDER</div>
            <div>OFF</div>
          </div>
          <div class="flex justify-between font-mono p-3 border-4 border-black border-b-0">
            <div>SMOOTH GRADATION</div>
            <div>OFF</div>
          </div>
          <div class="flex justify-between font-mono p-3 border-4 border-black">
            <div>NOISE REDUCTION</div>
            <div>OFF</div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="sharpness"
        className="py-6 bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        <div className="max-w-md px-4 mx-auto">
          <h2 id="sharpness" className="font-serif text-4xl mb-4">
            Sharpness
          </h2>

          <p className="mb-4 text-justify">
            Sharpness means edge enhancement. On nearly all TVs, the sharpness
            control adds something called "edge enhancement." That's exactly
            what it sounds like. The edges in the image are enhanced,
            essentially by adding a thin outline or halo to them. This makes
            them more visible.
          </p>

          <img
            src={sharpnessImg}
            alt=""
            className="w-100 max-w-md m-auto mb-4 border-4 border-white"
          />

          <p className="mb-4">This setting modify the original image, so:</p>

          <div class="flex justify-between font-mono p-3 bg-black text-white border-4 border-white">
            <div>SHARPNESS</div>
            <div>0</div>
          </div>
        </div>
      </section>

      <section aria-labelledby="color" className="py-6">
        <div className="max-w-md px-4 mx-auto">
          <h2 id="color" className="font-serif text-4xl mb-4">
            Color/saturation
          </h2>

          <p className="mb-4 text-justify">
            This setting controls the intensity of the colors on your TV. A good
            starting point for setting saturation is to keep it at 50% and then
            adjust it up or down based on your preference. If the colors appear
            too intense or unrealistic, reduce the saturation. If the colors
            appear washed out, increase the saturation.
          </p>

          <img
            src={saturationImg}
            alt=""
            className="w-100 max-w-md m-auto mb-4 border-4 border-black"
          />

          <p className="mb-4 text-justify">
            To impress the customers, the manufacturer increases the TV
            saturation but you do not want to watch a saturated movie. Put this
            config to the half of the value, the original image color.
          </p>

          <div class="flex justify-between font-mono p-3 border-4 border-black">
            <div>SATURATION</div>
            <div>50</div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="color-temp"
        className="py-6 bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        <div className="max-w-md px-4 mx-auto">
          <h2 id="color-temp" className="font-serif text-4xl mb-4">
            Color temparture / white balance
          </h2>

          <p className="mb-4 text-justify">
            Ideally, you also want your TV to match this as closely as possible
            so that at home you're seeing what the filmmakers had intended for
            you to see. Professional calibration is usually required to set the
            color temperature perfectly, but most TVs now include a few presets
            from which you can choose. After giving your brain a day or two to
            adjust to the "warm" setting, if you still think the picture is too
            red, you can go to the next highest setting, often labeled "medium."
            But you should avoid the "cool" setting.
          </p>

          <img
            src={whiteBalanceImg}
            alt=""
            className="w-100 max-w-md m-auto mb-4 border-4 border-white"
          />

          <p className="mb-4">
            The warm color is pleasing to the eye, realistic and charming.
          </p>

          <div class="flex justify-between font-mono p-3 bg-black text-white border-4 border-white">
            <div>COLOR TEMPERATURE</div>
            <div>warm</div>
          </div>
        </div>
      </section>

      <section aria-labelledby="color" className="py-6">
        <div className="max-w-md px-4 mx-auto">
          <h2 id="color" className="font-serif text-4xl mb-4">
            Contrast and bright
          </h2>

          <p className="mb-4 text-justify">
            Contrast and brightness are two sides of the same coin. The contrast
            setting adjusts the bright parts of the image, while the brightness
            setting adjusts the dark parts. If you set the contrast too high,
            you will lose the fine detail in bright images. If you set it too
            low, the whole image will appear flat and lifeless. Set the
            brightness too high and blacks will get lighter, causing the image
            to look washed out. Set it too low and all the details in shadows
            will disappear into a murky mess.
          </p>

          <img
            src={contrastImg}
            alt=""
            className="w-100 max-w-md m-auto mb-4 border-4 border-black"
          />

          <p className="mb-4 text-justify">
            By default the bright is ok, but the contrast setting usually is
            higher than recommended and it will loose bright details.
          </p>

          <div class="flex justify-between font-mono p-3 border-4 border-black border-b-0">
            <div>CONTRAST</div>
            <div>90%</div>
          </div>
          <div class="flex justify-between font-mono p-3 border-4 border-black">
            <div>BRIGHT</div>
            <div>default</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
