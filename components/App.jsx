import useUpdatingClock from 'hooks/useUpdatingClock'
import usragent from 'hooks/useragent'

export default function App() {
  
  const {sBrowser} = usragent()

  const mainStyle = {
    height: '100%',
    border:'solid 2px #232431',
    overflow: 'auto'
    
  }
  const contentStyle = {
    backgroundColor: '#2b2c3b',
    "marign-right": '0',
    padding: '15px',
    'margin-top': '10px',
    'margin-bottom': '10px',
    height: "100%",
    'box-shadow': 'var(--soft-shadow)'
  }
      return (
  <>
  {/* MAIN CONTENT */}
    <main style={mainStyle}>
  <div className='maincont'>
      <div id='about' style={contentStyle}>
        <h2>About</h2>
          <p>18 Year old British Furry Folf trying to learn languages (ReactJS, JavaScript and Python) I also enjoy doing Web Development and Photography.</p>
      </div>
      <div id='socials' style={contentStyle}>
        <h2>Socials</h2>
        <ul>
          <li aria-label="Discord">Discord: Hue#1935 | <a id="links" href="https://discord.gg/invite/H7NHrwGcjz">Server</a></li>
          <li aria-label="Telegram">Telegram: @HueOwO</li>
          <li aria-label="Github">GitHub: <a id="links" href="https://github.com/hue-owo">@Hue-OwO</a></li>
          <li aria-label="Mastodon">Mastodon: <a id="links" rel="me" href="https://furry.engineer/@Hue">@Hue@furry.engineer</a></li>
          <li aria-label="Tumblr">Tumblr: <a id="links" href="https://www.tumblr.com/blog/hueowo">@HueOwO</a> | <a id="links" href="https://hueowo.tumblr.com">Tumblr Website</a></li>
      </ul>
      </div>
      <div id='projects' style={contentStyle}>
                    <h2>Projects</h2>
                    <ul>
                    <h3>React Website (Old)</h3>
                    <li aria-label="Github" class="icon"><a href="https://github.com/Hue-OwO/website-but-react">Github Repository</a></li>
                    <h3>CSS Website</h3>
                    <li aria-label="Github" class="icon"><a href="https://github.com/Hue-OwO/css-website">Github Repository</a></li>
                    <h3>LIFX Discord Bot</h3>
                    <li aria-label="Github" class="icon"><a href="https://github.com/Hue-OwO/lifx-bulblist-react">Github Repository</a></li>
                    </ul>
      </div>
      <div id='photography' style={contentStyle}>
        <h2>Photography</h2>
        <a id='navbtn' style={{'width': '10em', 'textAlign': 'center'}} href='/photos'>Photos</a>
        <h3>Camera</h3>
        <ul>
          <li>D5100</li>
        </ul>
        <h3>Lenses</h3>
        <ul>
        <li>AF-S 18-55mm f/3.5-5.6 DX VR</li>
        <li>AF-S 55-200mm f/3.5-5.6 DX IF-ED</li>
        <li>Tamron SP 70-300mm f/4-5.6 Di VC USD</li>
        </ul>
      </div>
      <div id='misc' style={contentStyle}>
        <h2>Misc</h2>
      <div className='useragent'>
        <h3>User Agent</h3>
          <p>{sBrowser}</p>
        </div>
      </div>
</div>
  {/* END OF MAIN CONTENT */}
    </main>
  </>
  )
}
