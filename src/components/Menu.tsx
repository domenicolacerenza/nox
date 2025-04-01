import Image from "next/image";
import { Folder } from "./Folder";
import { PortfolioCard } from "./PortfolioCard";



const Menu = () => {

  return (
    <>
      <div className="fixed bottom-6 flex flex-row gap-6">



        <Folder title={"cosa facciamo"}
          modalWindow={
            <>
              <PortfolioCard
                title={"Fotografia e Video-Making - Raccontiamo la tua storia con immagini e suoni unici"}
                subtitle={"Non solo foto e video: cogliamo quello che ti rende speciale. Dalla Valle d’Itria, realizziamo shooting e riprese per eventi, masserie, ville e B&B, trasformando istanti in storie che parlano. Con montaggio ed editing curati, creiamo contenuti veri e che restano."}
                imgSrc="/syb/pic.png"
                modalContent={<div className="md:text-base text-sm mt-4 text-white">
                  • Shooting fotografici per eventi, location e chi sei davvero. <br></br>
                  • Produzione video per promuovere masserie, ville e B&B. <br></br>
                  • Montaggio ed editing di foto, video e audio per un risultato professionale. <br></br>
                </div>} modalFrameSrc={""}
              />
              <PortfolioCard
                title={"Comunicazione Social e Campagne Digital"}
                subtitle={"Parliamo la lingua dei social e ti diamo spazio online. Piani editoriali freschi, contenuti che girano ovunque e campagne ads che spingono visibilità e vendite. Siamo all’inizio, ma abbiamo la carica per far crescere la tua voce, passo dopo passo!"}
                imgSrc="/syb/scrib.png"
                modalContent={<div className="md:text-base text-sm mt-4 text-white">
                  • Programmazione social e piani editoriali su misura. <br></br>
                  • Contenuti multipiattaforma (post, reel, stories). <br></br>
                  • Campagne ads per promozione e risultati concreti. <br></br>
                </div>} modalFrameSrc={""}
              />
              <PortfolioCard
                title={"Micro Siti Web e Web App - Piccoli spazi digitali, grandi idee"}
                subtitle={"Creiamo micro siti e web app per dare vita ai tuoi eventi, alla tua azienda o al tuo portfolio artistico. Con un team giovane e curioso, ci mettiamo in gioco per costruire soluzioni digitali semplici, belle e utili, perfetti per chi ha qualcosa da raccontare."}
                imgSrc="/syb/web.png"
                modalContent={<div className="md:text-base text-sm mt-4 text-white">
                  • Micro siti per eventi (festival, mostre, lanci).  <br></br>
                  • Web app promozionali per aziende locali. <br></br>
                  • Portfolio digitale per artisti e creativi. <br></br>
                </div>} modalFrameSrc={""}
              />
            </>
          }
        />

        <Folder title={"contact"}
          modalWindow={
            

                <div className="flex flex-col w-10/12 md:w-5/12 m-4">
                  <div className="w-full font-black text-white md:text-lg text-sm">Siamo un gruppo di giovani creativi in Puglia, con la passione per la fotografia e le strategie digitali fatte su misura. <br></br>
                    Aiutiamo brand, aziende ed eventi a raccontarsi con immagini e idee che arrivano dritte al punto.</div>

                  <div className="w-full font-black text-white md:text-lg text-sm mt-8">Con un occhio fresco e tanta voglia di fare, diamo una spinta al tuo progetto attraverso creatività e contenuti che contano. </div>
                  <div className="w-full font-black text-white md:text-lg text-sm mt-8">  Pronto a partire? <br></br> Scrivici e creiamo qualcosa di bello insieme!</div>


                  <button

                    className="flex items-center justify-center p-4 h-12 place-items-center rounded-4xl backdrop-blur-sm bg-[#567A6A]/45 hover:bg-gray-300/50 transition text-white text-2xl mt-8">
                    <a href='mailto:noxvisionstudio@gmail.com' target="_blank">🌱Inizia con noi!</a>
                  </button>

                </div>
             
          }
        />

      </div>
    </>)
}
export default Menu;
