import './App.css';
import sharpnessImg from './img/sharpness.png';
import adaptativeContrastImg from './img/adaptative-contrast.png';
import saturationImg from './img/saturation.jfif';
import whiteBalanceImg from './img/white-balance.webp';
import contrastImg from './img/contrast.png';
import H2 from './components/H2';
import P from './components/P';
import Container from './components/Container';
import Img from './components/Img';
import Section from './components/Section';
import Config from './components/Config';

function App() {
  return (
    <div>
      <Section gradient aria-labelledby="presentation">
        <Container>
          <h1 id="presentation" className="text-4xl font-bold mb-4 text-center">
            TV calibration
          </h1>

          <P>
            The standard settings that comes to the television is to impress the
            customers in store. Other settings are to very bright environments.
          </P>
        </Container>
      </Section>

      <Section aria-labelledby="modifies">
        <Container>
          <H2 id="modifies">Modifies</H2>

          <P>Disable any setting that modify the original image.</P>

          <Img src={adaptativeContrastImg} />

          <Config notLast>
            <div>ADAPTATIVE CONTRAST</div>
            <div>OFF</div>
          </Config>

          <Config notLast>
            <div>MOTION INTERPOLATION</div>
            <div>OFF</div>
          </Config>

          <Config notLast>
            <div>JUDDER</div>
            <div>OFF</div>
          </Config>

          <Config notLast>
            <div>SMOOTH GRADATION</div>
            <div>OFF</div>
          </Config>

          <Config>
            <div>NOISE REDUCTION</div>
            <div>OFF</div>
          </Config>
        </Container>
      </Section>

      <Section gradient aria-labelledby="sharpness">
        <Container>
          <H2 id="sharpness">Sharpness</H2>

          <P>
            Sharpness means edge enhancement. On nearly all TVs, the sharpness
            control adds something called "edge enhancement." That's exactly
            what it sounds like. The edges in the image are enhanced,
            essentially by adding a thin outline or halo to them. This makes
            them more visible.
          </P>

          <Img src={sharpnessImg} />

          <P>This setting modify the original image, so:</P>

          <Config>
            <div>SHARPNESS</div>
            <div>0</div>
          </Config>
        </Container>
      </Section>

      <Section aria-labelledby="color">
        <Container>
          <H2 id="color">Color/saturation</H2>

          <P>
            This setting controls the intensity of the colors on your TV. A good
            starting point for setting saturation is to keep it at 50% and then
            adjust it up or down based on your preference. If the colors appear
            too intense or unrealistic, reduce the saturation. If the colors
            appear washed out, increase the saturation.
          </P>

          <Img src={saturationImg} />

          <P>
            To impress the customers, the manufacturer increases the TV
            saturation but you do not want to watch a saturated movie. Put this
            config to the half of the value, the original image color.
          </P>

          <Config>
            <div>SATURATION</div>
            <div>50</div>
          </Config>
        </Container>
      </Section>

      <Section gradient aria-labelledby="color-temp">
        <Container>
          <H2 id="color-temp">Color temparture / white balance</H2>

          <P>
            Ideally, you also want your TV to match this as closely as possible
            so that at home you're seeing what the filmmakers had intended for
            you to see. Professional calibration is usually required to set the
            color temperature perfectly, but most TVs now include a few presets
            from which you can choose. After giving your brain a day or two to
            adjust to the "warm" setting, if you still think the picture is too
            red, you can go to the next highest setting, often labeled "medium."
            But you should avoid the "cool" setting.
          </P>

          <Img src={whiteBalanceImg} />

          <P>The warm color is pleasing to the eye, realistic and charming.</P>

          <Config>
            <div>COLOR TEMPERATURE</div>
            <div>warm</div>
          </Config>
        </Container>
      </Section>

      <Section aria-labelledby="color">
        <Container>
          <H2 id="color">Contrast and bright</H2>

          <P>
            Contrast and brightness are two sides of the same coin. The contrast
            setting adjusts the bright parts of the image, while the brightness
            setting adjusts the dark parts. If you set the contrast too high,
            you will lose the fine detail in bright images. If you set it too
            low, the whole image will appear flat and lifeless. Set the
            brightness too high and blacks will get lighter, causing the image
            to look washed out. Set it too low and all the details in shadows
            will disappear into a murky mess.
          </P>

          <Img src={contrastImg} />

          <P>
            By default the bright is ok, but the contrast setting usually is
            higher than recommended and it will loose bright details.
          </P>

          <Config notLast>
            <div>CONTRAST</div>
            <div>90%</div>
          </Config>

          <Config>
            <div>BRIGHT</div>
            <div>default</div>
          </Config>
        </Container>
      </Section>
    </div>
  );
}

export default App;
