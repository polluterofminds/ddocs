import darkLogo from "../../assets/img/darkLogo.svg";
import github from "../../assets/img/github.svg";
import discord from "../../assets/img/discord.svg";
import twitter from "../../assets/img/twitter.svg";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-800" aria-labelledby="footer-heading">
      <div className="w-full m-auto grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-3">
          <div className="flex justify-center text-center">
            <img className="w-10" src={darkLogo} alt="darkLogo" />
          </div>
          <div>
            <p className="text-white">dDocs Links</p>
            <p className="text-white">
              <span className="flex flex-row"><img src={github} alt="github logo" /><a href="https://github.com/polluterofminds/ddocs" target="_blank" rel="noopener noreferrer"><u>Github</u></a></span>
              <span className="flex flex-row"><img src={discord} alt="discord icon" /><a href="https://discord.gg/cwfnm4PZDJ" target="_blank" rel="noopener noreferrer"><u>Discord</u></a></span>
            </p>
            <br/>
            <p className="text-white">Who made this?</p>
            <p className="text-white">
              <span className="flex flex-row"><img src={twitter} alt="twitter icon" /> <a href="https://twitter.com/polluterofminds" target="_blank" rel="noopener noreferrer"><u>@polluterofminds</u></a></span> & <span className="flex flex-row"><img src={twitter} alt="twitter icon" /> <a href="https://twitter.com/zherring" target="_blank" rel="noopener noreferrer"><u>@zherring</u></a></span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-white">
            Published under an MIT License and made possible by a generous grant
            from the FileCoin Foundation.
          </p>
          <p className="text-white">
            ️❤️ Base icons created by Icon Fair and James Kopina from the Noun
            Project.
          </p>
        </div>
      </div>
    </footer>
  );
}
